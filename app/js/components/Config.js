// System-wide functions and variables.
import * as UUID from 'uuid';

const Config = {
  APPNAME: 'Andromeda',
  ACTIONS: {
    APP: {
      MODAL_SHOW: 'APP.MODAL.SHOW',
      MODAL_HIDE: 'APP.MODAL.HIDE'
    },
    COMBAT: {
      RUN: 'COMBAT.RUN',
      MELEE: 'COMBAT.MELEE'
    },
    USER: {
      GET: 'USER.GET',
      FETCH: 'USER.FETCH'
    },
    PLAYER: {
      SAVE: 'PLAYER.SAVE',
      GET: 'PLAYER.GET',
      FETCH: 'PLAYER.FETCH',
      ENCUMBRANCE: 'PLAYER.ENCUMBRANCE',
      UPDATE: 'PLAYER.UPDATE',
      RUN: 'PLAYER.RUN',
      MOUNT: 'PLAYER.MOUNT',
      EAST: 'PLAYER.EAST',
      WEST: 'PLAYER.WEST',
      NORTH: 'PLAYER.NORTH',
      SOUTH: 'PLAYER.SOUTH',
      TICK: 'PLAYER.TICK'
    },
    MESSAGES: {
      ADD: 'MSGS.ADD',
      REMOVE: 'MSGS.REMOVE',
      ERROR: 'MSGS.ERROR',
      SPEAK: 'MSGS.SPEAK',
      GAIN: 'MSGS.GAIN',
      WARNING: 'MSGS.WARNING'
    },
    PLANET: {
      GET: 'PLANET.GET'
    },
    ITEM: {
      USE: 'ITEM.USE'
    },
    INVENTORY: {
      SAVE: 'INVENTORY.SAVE',
      FETCH: 'INVENTORY.FETCH',
      GET: 'INVENTORY.GET',
      ADD: 'INVENTORY.ADD',
      REMOVE: 'INVENTORY.REMOVE',
      SELL: 'INVENTORY.SELL',
      EQUIP: 'INVENTORY.EQUIP',
      UNEQUIP: 'INVENTORY.UNEQUIP',
      RHAND: 'right hand',
      LHAND: 'left hand',
      FEET: 'feet',
      BODY: 'body',
      HEAD: 'head',
      ARMS: 'arms',
      HANDS: 'hands',
      LEGS: 'legs',
      NECK: 'neck',
      'RFINGER': 'right finger',
      'LFINGER': 'left finger',
    },
    SKILLS: {
      CRAFT: 'SKILLS.CRAFT',
      SAVE: 'SKILLS.SAVE',
      FETCH: 'SKILLS.FETCH',
      GET: 'SKILLS.GET',
      LUMBERJACKING: 'SKILLS.LUMBERJACKING',
      MINING: 'SKILLS.MINING',
      WRESTLING: 'SKILLS.WRESTLING'
    },
    MOBS: {
      CREATE: 'MOBS.CREATE',
      CLEAR_COMBAT: 'MOBS.CLEAR_COMBAT',
      IN_COMBAT: 'MOBS.IN_COMBAT',
      SHOW_ACTION: 'MOBS.SHOW_ACTION',
      SHOW_COMBAT: 'MOBS.SHOW_COMBAT'
    },
  },
  URLS: {
    API: 'https://andromeda.vintimilla.org',
    PLAYER: '/player',
    USER: '/user',
    INVENTORY: '/inventory',
    SKILLS: '/skill',
  },

  upperCase: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  randomKey: (text = '') => {
    return text + UUID();
  },

  notifyGain: (store, msg) => {
    this.a.notify(store, msg, this.a.ACTIONS.MESSAGES.GAIN);
  },

  notifyError: (store, msg) => {
    this.a.notify(store, msg, this.a.ACTIONS.MESSAGES.ERROR);
  },

  notifyWarning: (store, msg) => {
    this.a.notify(store, msg, this.a.ACTIONS.MESSAGES.WARNING);
  },

  notify: (store, msg, type = this.a.ACTIONS.MESSAGES.ADD) => {
    setTimeout(() => store.dispatch({
      type: type,
      payload: {
        body: msg
      }
    }), 0);
  },

  modal: (store, body = '', title = null, type = '', data = {}) => {
    setTimeout(() => store.dispatch({
      type: this.a.ACTIONS.APP.MODAL_SHOW,
      payload: {
        body: body,
        title: title,
        type: type,
        data: data, //extra data
      }
    }), 0);
  },

  dispatch: (store, type, payload) => {
    setTimeout(() => store.dispatch({
      type: type,
      payload: payload
    }), 0);
  },

}

export default Config;