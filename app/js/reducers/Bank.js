import Config from '../components/Config';
import { ItemData } from '../data/ItemData';

let BANK = Config.ACTIONS.BANK;

const Bank = (state = {}, action) => {
  const { type, payload } = action;

  let always_overwrite = (item, item_data) => {
    // Always use ItemData value for these properties
    let fields = [
      'countable',
      'value',
      'weight',
      'type',
      'sub_type'
    ];

    for (let i in fields) {
      item[fields[i]] = item_data[fields[i]]
    }

    return item;
  };

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

          merge = always_overwrite(merge, item_data);
          return merge;
        break;
        case 'weapons':
          merge = {
            ...item_data,
            ...item
          };
          merge.equip = { ...item.equip };
          merge.craft = { ...item_data.craft, ...item.craft };

          merge = always_overwrite(merge, item_data);
          return merge;
        break;
        case 'armor':
          merge = {
            ...item_data,
            ...item
          };

          merge.equip = { ...item.equip };
          merge.craft = { ...item_data.craft, ...item.craft };

          merge = always_overwrite(merge, item_data);
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


  let bankItem = undefined;
  if (!!payload && !!payload.item) {
    if (!!payload.item.key) {
      bankItem = _.findWhere(state.Bank.items, { key: payload.item.key });
    } else {
      bankItem = _.findWhere(state.Bank.items, { id: payload.item.id });
    }
  }

  switch (type) {
    case BANK.GET:
      let items = { ...state.Bank.items, ...payload.items };

      state.Bank = {
        credits: payload.credits || 0,
        items: items
      }

      state.Bank = merge_new_data(state.Bank);
    break;
    case BANK.WITHDRAW:
      if (!!payload.item) {
        if (bankItem.countable === true) {
          bankItem.count -= payload.count || 1;
          bankItem.count = (bankItem.count < 0) ? 0 : bankItem.count;
        } else {
          state.Bank.items.splice(
            _.findIndex(state.Bank.items, { key: bankItem.key }), 1
          );
        }
      }

      if (!!payload.credits) {
        state.Bank.credits -= payload.credits;
      }

      // Save
      state.Queue.add('actions', Config.ACTIONS.BANK.SAVE, { ...state.Bank, player_id: state.Player.id });
    break;
    case BANK.DEPOSIT:
      if (!!payload.item) {
        if (payload.item.countable === true && !!bankItem) {
          bankItem.count += payload.count || 1;
        } else {
          state.Bank.items.push({...payload.item, ...{count: payload.count}});
        }
      }

      if (!!payload.credits) {
        state.Bank.credits += payload.credits;
      }

      // Save
      state.Queue.add('actions', Config.ACTIONS.BANK.SAVE, { ...state.Bank, player_id: state.Player.id });
    break;
  }

  // Possible move calc_encumbrance from Inventory.js to Effects.js
  return state.Bank;
}

export default Bank;
