import Config from '../components/Config';
import { ItemData } from '../data/ItemData';

let INVENTORY = Config.ACTIONS.INVENTORY;

// NOTE: Saving to database is handled in AndromedaService
const Inventory = (state = {}, action) => {

  const { type, payload } = action;

  let merge_new_data = (data) => {
    let item_data = {};
    // Consider rewriting so it loops through properties & sub-objects
    let items = _.map(data.items, (item) => {
      item_data = Config.clone(_.findWhere(ItemData, { id: item.id }));

      return {
        ...item_data,
        ...item,
        craft: { ...item_data.craft, ...item.craft },
      };
    });

    let weapons = _.map(data.weapons, (weapon) => {
      // Need to get latest item model structure.
      item_data = Config.clone(_.findWhere(ItemData, { id: weapon.id }));

      // Return information saved from player (equipped, key, etc)
      return {
        ...item_data,
        ...weapon,
        equip: { ...weapon.equip },
        craft: { ...item_data.craft, ...weapon.craft },
        weapon: { ...item_data.weapon, ...weapon.weapon }
      };
    });

    let armors = _.map(data.armor, (armor) => {
      // Need to get latest item model structure.
      let item_data = Config.clone(_.findWhere(ItemData, { id: armor.id }));

      // Return information saved from player (equipped, key, etc)
      return {
        ...item_data,
        ...armor,
        equip: { ...armor.equip },
        craft: { ...item_data.craft, ...armor.craft }
      };
    });

    data.items = items;
    data.weapons = weapons;
    data.armor = armors;

    return data;
  }

  if (!state.Inventory) {
    state.Inventory = {'armor': [],'items': [{'value': 1, 'count': 5, 'weight': 5, 'countable': true, 'description': '', 'plural': 'ore', 'id': 2, 'name': 'ore', 'sub_type': 'resource', 'type': 'items'}, {'value': 1, 'count': 5, 'weight': 2, 'countable': true, 'description': '', 'plural': 'logs', 'id': 1, 'name': 'log', 'sub_type': 'resource', 'type': 'items'}], 'weapons': [{'weapon': {'strength': 5, 'speed': 2.25, 'skill': 6, 'max': 13, 'min': 10, 'hands': 'one'}, 'key': 'inventoryItem1474069f-b0f8-4d0f-9603-033bc2f0bf24', 'countable': false, 'description': 'a butcher knife', 'id': 4, 'type': 'weapons', 'craft': {'resource': {'id': 2, 'min': 3}, 'skill': {'min': 20, 'id': 5, 'name': 'blacksmithing'}}, 'count': 1, 'weight': 1, 'plural': 'butcher knife', 'name': 'butcher knife', 'value': 5, 'equip': { 'equipped': false, 'location': 'right hand'}}, {'weapon': {'type': 'melee', 'strength': 5, 'speed': 2.25, 'skill': 6, 'max': 13, 'min': 10, 'hands': 'one'}, 'key': 'inventoryItem1474069f-b0f8-4d0f-9603-033bc2f0bf25', 'countable': false, 'description': 'a butcher knife', 'id': 4, 'type': 'weapons', 'craft': {'resource': {'id': 2, 'min': 3}, 'skill': {'min': 20, 'id': 5, 'name': 'blacksmithing'}}, 'count': 1, 'weight': 1, 'plural': 'butcher knife', 'name': 'butcher knife', 'value': 5, 'equip': { 'equipped': true, 'location': 'right hand'}}]};
    state.Inventory = merge_new_data(state.Inventory);
  }

  let unequip_others = (item) => {
    let equipped_items = _.filter(state.Inventory[item.type], (eq) => {
      return eq.equip.equipped && eq.key !== item.key
        && ((eq.equip.location === item.equip.location)
        || (item.equip.location === INVENTORY.BOTHHANDS && (eq.equip.location === INVENTORY.LHAND || eq.equip.location === INVENTORY.RHAND))
        || (eq.equip.location === INVENTORY.BOTHHANDS && (item.equip.location === INVENTORY.LHAND || item.equip.location === INVENTORY.RHAND)));
    });

    _.each(equipped_items, (eq) => {
      eq.equip.equipped = false;
    });
  }

  let calc_encumbrance = () => {
    let encumbrance = 0;
    _.each(_.union(state.Inventory.items, state.Inventory.weapons, state.Inventory.armor), (inv, key) => {
      encumbrance += (inv.countable) ? inv.count * inv.weight : inv.weight;
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

        if (item.countable === true && !!inventoryItem) {
        inventoryItem.count += payload.count || 1;
      } else {
        item.count = payload.count;
        state.Inventory[item.type].push(item);
      }

      if (payload.score && payload.score === true) {
        let add_name = (payload.craft === true) ? 'crafted' : item.name;
        state.Player.score[add_name]++;
      }
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
    break;
    case INVENTORY.EQUIP:

      let strength = 0;
      if (inventoryItem.type === 'armor') {
         strength = inventoryItem.armor.str_req || 0;
      }

      if (inventoryItem.type === 'weapons') {
         strength = inventoryItem.weapon.str_req || 0;
      }

      if (state.Player.strength >= strength) {
        inventoryItem.equip.equipped = true;
        unequip_others(inventoryItem);
      } else {
        state.Queue.add('actions', Config.ACTIONS.MESSAGES.WARNING, 
          { body: `You need at least ${strength} strength to equip this.` }
        );
        inventoryItem.equip.equipped = false;
        state.Queue.add('actions', Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
      }

    break;
    case INVENTORY.UNEQUIP:
      inventoryItem.equip.equipped = false;
      state.Queue.add('actions', Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
    break;
  }

  // Note, these functions are being called twice. If it gets to be resource-intensive, move to switch() statement (multiple calls).
  state.Player.encumbrance = calc_encumbrance();

  return state.Inventory;
}

export default Inventory;
