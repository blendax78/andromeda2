import User from './User';
import Player from './Player';
import Messages from './Messages';
import Planet from './Planet';
import Inventory from './Inventory';
import Skills from './Skills';
import Mobs from './Mobs';
import Effects from './Effects';
import Queue from './Queue';
import Config from '../components/Config';

let APP = Config.ACTIONS.APP;

const Reducers = (state = {}, action) => {
  const { type, payload } = action;

  if (!state.User) {
    state = {
      App: {
        modal: {
          body: false,
          open: false,
          locked: false
        }
      },
      User: User(state, action),
      Player: Player(state, action),
      Messages: Messages(state, action),
      Planet: Planet(state, action),
      Inventory: Inventory(state, action),
      Skills: Skills(state, action),
      Mobs: Mobs(state, action),
      Queue: Queue(state, action)
    }
  }

  let method = type.split('.')[0];

  switch (method) {
    case 'USER':
      User(state, action);
    break;
    case 'COMBAT':
    case 'PLAYER':
      Player(state, action);
      Effects(state, action);
    break;
    case 'MSGS':
      Messages(state, action);
    break;
    case 'INVENTORY':
      Inventory(state, action);
      Effects(state, action);
    break;
    case 'QUEUE':
      Queue(state, action);
    break;
    case 'SKILLS':
      Skills(state, action);
    break;
    case 'PLANET':
      Planet(state, action);
    break;
    case 'COMBAT':
    case 'MOBS':
      Mobs(state, action);
    break;
    case 'APP':
      switch (type) {
        case APP.MODAL_SHOW:
          state.App.modal = { ...state.App.modal, ...payload, open: true };
        break;
        case APP.MODAL_HIDE:
          state.App.modal = { body: false, open: false, locked: false };
        break;
        case APP.MODAL_UPDATE:
          state.App.modal = { ...state.App.modal, ...payload };
        break;
      }
    break;
  }

  return state;
}

export default Reducers;
