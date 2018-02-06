import Config from '../components/Config';
import { ItemData } from '../data/ItemData';

let INVENTORY = Config.ACTIONS.INVENTORY;

const Inventory = (state = {}, action) => {

  const { type, payload } = action;

  let merge_new_data = (data) => {

    let items = _.map(data.items, (item) => {
      return {...Config.clone(_.findWhere(ItemData, { id: item.id })), ...item };
    });

    let weapons = _.map(data.weapons, (weapon) => {
      return {...Config.clone(_.findWhere(ItemData, { id: weapon.id })), ...weapon };
    });

    let armors = _.map(data.armor, (armor) => {
      return {...Config.clone(_.findWhere(ItemData, { id: armor.id })), ...armor };
    });

    data.items = items;
    data.weapons = weapons;
    data.armor = armors;

    return data;
  }

  if (!state.Inventory) {
    state.Inventory = {'armor': [],'items': [{'value': 1, 'count': 5, 'weight': 5, 'countable': true, 'description': '', 'plural': 'ore', 'id': 2, 'name': 'ore', 'sub_type': 'resource', 'type': 'items'}, {'value': 1, 'count': 5, 'weight': 2, 'countable': true, 'description': '', 'plural': 'logs', 'id': 1, 'name': 'log', 'sub_type': 'resource', 'type': 'items'}], 'weapons': [{'weapon': {'strength': 5, 'speed': 2.25, 'skill': 6, 'max': 13, 'min': 10, 'hands': 'one'}, 'key': 'inventoryItem1474069f-b0f8-4d0f-9603-033bc2f0bf24', 'countable': false, 'description': 'a butcher knife', 'id': 4, 'type': 'weapons', 'craft': {'resource': {'id': 2, 'min': 3}, 'skill': {'min': 20, 'id': 5, 'name': 'blacksmithing'}}, 'count': 1, 'weight': 1, 'plural': 'butcher knife', 'name': 'butcher knife', 'value': 5}, {'weapon': {'strength': 5, 'speed': 2.25, 'skill': 6, 'max': 13, 'min': 10, 'hands': 'one'}, 'key': 'inventoryItem1474069f-b0f8-4d0f-9603-033bc2f0bf25', 'countable': false, 'description': 'a butcher knife', 'id': 4, 'type': 'weapons', 'craft': {'resource': {'id': 2, 'min': 3}, 'skill': {'min': 20, 'id': 5, 'name': 'blacksmithing'}}, 'count': 1, 'weight': 1, 'plural': 'butcher knife', 'name': 'butcher knife', 'value': 5, 'equip': { 'equipped': true, 'location': 'right hand'}}]};
    state.Inventory = merge_new_data(state.Inventory);
  }

  let unequip_others = (item) => {
    let equipped_items = _.filter(state.Inventory[item.type], (eq) => {
      return eq.equip.equipped && eq.equip.location === item.equip.location && eq.key !== item.key;
    });

    _.each(equipped_items, (eq) => {
      eq.equip.equipped = false;
    });
  }

  let calc_encumbrance = () => {
    let encumbrance = 0;
    _.each(_.union(state.Inventory.items, state.Inventory.weapons, state.Inventory.armor), (inv, key) => {
      encumbrance += inv.count * inv.weight;
    });

    return Math.round(encumbrance);
  }

  let item = (payload && payload.item) ? Config.clone(_.findWhere(ItemData, { id: payload.item })) : {};
  // fix this to use key over id
  let inventoryItem = {};
  // This shouldn't extend/clone the inventory object in order to maintain pass-by-reference.
  if (!!payload && payload.key) {
    inventoryItem = _.findWhere(state.Inventory[item.type], { key: payload.key });
  } else {
    inventoryItem = _.findWhere(state.Inventory[item.type], { id: item.id });
  }  

  switch (type) {
    case INVENTORY.GET:
      delete payload.player_id;

      state.Inventory = {...state.Inventory, ...payload};
      // Fix any missing data (new additions to data model)
      state.Inventory = merge_new_data(state.Inventory);

      state.Player.encumbrance = calc_encumbrance();
    break;
    case INVENTORY.ADD:
      if (!item.key) {
        item.key = Config.randomKey('inventoryItem');
      }

      if (item.countable === true && inventoryItem !== undefined) {
        inventoryItem.count += payload.count || 1;
      } else {
        item.count = payload.count;
        state.Inventory[item.type].push(item);
      }

      if (payload.score && payload.score === true) {
        let add_name = (payload.craft === true) ? 'crafted' : item.name;
        state.Player.score[add_name]++;
      }

      Config.dispatch(store, Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
    break;
    case INVENTORY.REMOVE:
      if (item.countable === false) {
        if (inventoryItem) {
          let index = _.findIndex(state.Inventory[item.type], (inv) => {
            if (payload.key) {
              return inv.key === payload.key;
            } else {
              return inv.id === item.id;
            }
          });

          state.Inventory[item.type].splice(index, 1);
        }
      } else {
        if (inventoryItem) {
          inventoryItem.count -= payload.count;
        }
      }

    Config.dispatch(store, Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
    break;
    case INVENTORY.EQUIP:
      inventoryItem.equip.equipped = true;
      unequip_others(inventoryItem);

      Config.dispatch(store, Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
    break;
    case INVENTORY.UNEQUIP:
      inventoryItem.equip.equipped = false;

      Config.dispatch(store, Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
    break;
  }

  // Note, these functions are being called twice. If it gets to be resource-intensive, move to switch() statement (multiple calls).
  state.Player.encumbrance = calc_encumbrance();

  return state.Inventory;
}

export default Inventory;
