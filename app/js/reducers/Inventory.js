import Config from '../components/Config';
let INVENTORY = Config.ACTIONS.INVENTORY;

const Inventory = (state = {}, action) => {
  state.Inventory = state.Inventory || {
    items: [],
    weapons: [],
    armor: [],
  };

  const { type, payload } = action;

  switch (type) {
    case INVENTORY.ADD:
      // Do nothing
    break;
    case INVENTORY.REMOVE:

    break;
  }

  return state.Inventory;
}

export default Inventory;
