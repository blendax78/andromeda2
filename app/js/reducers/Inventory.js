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

  let calcEncumbrance = () => {
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
      state.Inventory = {...state.Inventory, ...payload};
      state.Player.encumbrance = calcEncumbrance();

    break;
    case INVENTORY.ADD:
      if (item.countable === true && inventoryItem !== undefined) {
        inventoryItem.count += payload.count || 1;
      } else {
        item.count = payload.count;
        state.Inventory[item.type].push(item);
      }

      if (payload.score && payload.score === true) {
        state.Player.score[item.name]++;
      }

      state.Player.encumbrance = calcEncumbrance();

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

    break;
  }

  return state.Inventory;
}

export default Inventory;
