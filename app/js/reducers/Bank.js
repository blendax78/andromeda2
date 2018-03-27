import Config from '../components/Config';
import { ItemData } from '../data/ItemData';

let BANK = Config.ACTIONS.INVENTORY;

const Bank = (state = {}, action) => {
  const { type, payload } = action;

  let merge_new_data = (data) => {
    let item_data = {};
    let merge = {};

    let items = _.map(data.items, (item) => {
      item_data = Config.clone(_.findWhere(ItemData, { id: item.id }));

      switch (item.type) {
        case 'items':
          merge = {
            ...item_data,
            ...item
          };

          if (item.craft || item_data.craft) {
            merge.craft = { ...item_data.craft, ...item.craft };
          }
          return merge;
        break;
        case 'weapons':
          merge = {
            ...item_data,
            ...item
          };
          merge.equip = { ...item.equip };
          merge.craft = { ...item_data.craft, ...item.craft };
          return merge;
        break;
        case 'armor':
          merge = {
            ...item_data,
            ...item
          };

          merge.equip = { ...item.equip };
          merge.craft = { ...item_data.craft, ...item.craft };
          return merge;
        break;
      }

    });

    return { credits: data.credits, items: items };
  }

  if (!state.Bank) {
    state.Bank = {credits: 15, items: [{'value': 1, 'count': 5, 'weight': 5, 'countable': true, 'description': '', 'plural': 'ore', 'id': 2, 'name': 'ore', 'sub_type': 'resource', 'type': 'items'}, {'value': 1, 'count': 5, 'weight': 2, 'countable': true, 'description': '', 'plural': 'logs', 'id': 1, 'name': 'log', 'sub_type': 'resource', 'type': 'items'}]};
    state.Bank = merge_new_data(state.Bank);
  }
  
  switch (type) {
    case BANK.GET:
      let items = { ...state.Bank.items, ...payload.items };

      state.Bank = {
        credits: payload.credits,
        items: items
      }

      state.Bank = merge_new_data(state.Bank);
    break;
    case BANK.WITHDRAW:
      if (!!payload.key) {
        // check for countable
        let item = _.findWhere(state.Bank.items, { key: payload.key });

        if (!!item) {
          state.Inventory[item.type].push(item);
        }
      }

      if (!!payload.credits) {
        state.Player.credits += credits;
      }

      // Save

    break;
    case BANK.DEPOSIT:
      if (!!payload.item) {
        state.Bank.items.push(payload.item);
      }

      if (!!payload.credits) {
        state.Bank.credits += credits;
      }

      // Save
      
    break;
  }

  // Possible move calc_encumbrance from Inventory.js to Effects.js
  return state.Bank;
}

export default Bank;
