import User from './User';
import Player from './Player';
import Messages from './Messages';
import Planet from './Planet';
import Inventory from './Inventory';
import Skills from './Skills';
import Mobs from './Mobs';
import Effects from './Effects';
import Queue from './Queue';
import Bank from './Bank';
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
        },
        containers: []
      },
      User: User(state, action),
      Player: Player(state, action),
      Messages: Messages(state, action),
      Planet: Planet(state, action),
      Inventory: Inventory(state, action),
      Skills: Skills(state, action),
      Mobs: Mobs(state, action),
      Queue: Queue(state, action),
      Bank: Bank(state, action)
    }
  }

  let method = type.split('.')[0];
  let index = 0;

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
    case 'BANK':
      Bank(state, action);
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
        case APP.CONTAINER_CREATE:
          state.App.containers.push(payload.container);
        break;
        case APP.CONTAINER_UPDATE:
          index = _.findIndex(state.App.containers, { key: payload.key });
          let container = state.App.containers[index];

          if (index < 0) {
            break;
          } else {
            state.App.containers[index] = {...container, ...payload};
          }
          state.App.containers.push(payload.container);
        break;
        case APP.CONTAINER_UNLOCK:
          index = _.findIndex(state.App.containers, { key: payload.key });

          if (index < 0) {
            break;
          } else {
            state.App.containers[index].locked = false;
          }
        break;
      }
    break;
  }

  return state;
}

export default Reducers;
