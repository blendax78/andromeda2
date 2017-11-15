import Config from '../components/Config';
import { ItemData } from '../data/ItemData';

let INVENTORY = Config.ACTIONS.INVENTORY;

const Inventory = (state = {}, action) => {
  state.Inventory = state.Inventory || {
    items: [],
    weapons: [],
    armor: [],
  };

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
        state.Player.score[item.name]++;
      }

      Config.dispatch(store, Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
      state.Player.encumbrance = calc_encumbrance();

    break;
    case INVENTORY.REMOVE:
      if (item.countable === false) {
        if (inventoryItem) {
          let index = _.findIndex(state.Inventory[item.type], (inv) => {
            return inv.id === item.id;
          });

          state.Inventory[item.type].splice(index, 1);
        }
      } else {
        if (inventoryItem) {
          inventoryItem.count -= payload.count;
        }
      }

    Config.dispatch(store, Config.ACTIONS.INVENTORY.SAVE, { ...state.Inventory, player_id: state.Player.id });
    state.Player.encumbrance = calc_encumbrance();

    break;
  }

  return state.Inventory;
}

export default Inventory;
