import User from './User';
import Player from './Player';
import Messages from './Messages';
import Planet from './Planet';
import Inventory from './Inventory';
import Skills from './Skills';
import Mobs from './Mobs';
import Effects from './Effects';
import Config from '../components/Config';

let APP = Config.ACTIONS.APP;

const Reducers = (state = {}, action) => {
  const { type, payload } = action;

  let tick_handler = () => {
    Config.dispatch(store, Config.ACTIONS.PLAYER.TICK, {});
    Config.dispatch(store, Config.ACTIONS.MOBS.TICK, {});

    if (this.timer % 30 === 0) {
      if (Config.ENV === 'prod') {
        // Only if not on local.
        Config.dispatch(store, Config.ACTIONS.PLAYER.SAVE, store.getState().Player);
        Config.notifyGain(store, 'Saving Player.');
      }
    }

    this.timer++;
  };

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
      Mobs: Mobs(state, action)
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

  // Global tick handler
  this.timer = this.timer || 0;
  this.tick = this.tick || setInterval(() => {
    tick_handler();
  }, 1000);

  return state;
}

export default Reducers;
