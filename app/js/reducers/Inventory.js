import Config from '../components/Config';
import { ItemData } from '../data/ItemData';

let INVENTORY = Config.ACTIONS.INVENTORY;

const Inventory = (state = {}, action) => {
  state.Inventory = state.Inventory || {'armor': [],'items': [{'value': 1, 'count': 5, 'weight': 5, 'countable': true, 'description': '', 'plural': 'ore', 'id': 2, 'name': 'ore', 'sub_type': 'resource', 'type': 'items'}, {'value': 1, 'count': 5, 'weight': 2, 'countable': true, 'description': '', 'plural': 'logs', 'id': 1, 'name': 'log', 'sub_type': 'resource', 'type': 'items'}], 'weapons': [{'weapon': {'strength': 5, 'speed': 2.25, 'skill': 6, 'max': 13, 'min': 10, 'hands': 'one'}, 'key': 'inventoryItem1474069f-b0f8-4d0f-9603-033bc2f0bf24', 'countable': false, 'description': 'a butcher knife', 'id': 4, 'type': 'weapons', 'craft': {'resource': {'id': 2, 'min': 3}, 'skill': {'min': 20, 'id': 5, 'name': 'blacksmithing'}}, 'count': 1, 'weight': 1, 'plural': 'butcher knife', 'name': 'butcher knife', 'value': 5}]};

  const { type, payload } = action;

  let calc_encumbrance = () => {
    let encumbrance = 0;
    _.each(_.union(state.Inventory.items, state.Inventory.weapons, state.Inventory.armor), (inv, key) => {
      encumbrance += inv.count * inv.weight;
    });

    return encumbrance;
  }

  let item = (payload && payload.item) ? _.extend({}, _.findWhere(ItemData, { id: payload.item })) : {};
  let inventoryItem = _.findWhere(state.Inventory[item.type], { id: item.id });

  switch (type) {
    case INVENTORY.GET:
      delete payload.player_id;

      state.Inventory = {...state.Inventory, ...payload};
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
  }

  state.Player.encumbrance = calc_encumbrance();
  return state.Inventory;
}

export default Inventory;
