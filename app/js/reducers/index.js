import User from './User';
import Player from './Player';
import Messages from './Messages';
import Planet from './Planet';
import Inventory from './Inventory';
import Skills from './Skills';

const Reducers = (state = {}, action) => {
  const { type, payload } = action;

  if (!state.User) {
    state = {
      User: User(state, action),
      Player: Player(state, action),
      Messages: Messages(state, action),
      Planet: Planet(state, action),
      Inventory: Inventory(state, action),
      Skills: Skills(state, action)
    }
  }

  let method = type.split('.')[0];

  switch (method) {
    case 'USER':
      User(state, action);
    break;
    case 'PLAYER':
      Player(state, action);
    break;
    case 'MSGS':
      Messages(state, action);
    break;
    case 'INVENTORY':
      Inventory(state, action);
    break;
    case 'SKILLS':
      Skills(state, action);
    break;
    case 'PLANET':
      Planet(state, action);
    break;
  }

  // switch (type) {
    // app actions?
  // }

  return state;
}

export default Reducers;
