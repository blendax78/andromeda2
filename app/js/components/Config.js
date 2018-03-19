// System-wide functions and variables.
import * as UUID from 'uuid';

const Config = {
  APPNAME: 'Andromeda',
  ENV: (location.href.indexOf('localhost') !== -1) ? 'dev' : 'prod',
  ACTIONS: {
    APP: {
      MODAL_SHOW: 'APP.MODAL.SHOW',
      MODAL_HIDE: 'APP.MODAL.HIDE',
      MODAL_UPDATE: 'APP.MODAL.UPDATE'
    },
    COMBAT: {
      RUN: 'COMBAT.RUN',
      MELEE: 'COMBAT.MELEE',
      RANGED: 'COMBAT.RANGED'
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
      HIDE: 'PLAYER.HIDE',
      MOUNT: 'PLAYER.MOUNT',
      EAST: 'PLAYER.EAST',
      WEST: 'PLAYER.WEST',
      NORTH: 'PLAYER.NORTH',
      SOUTH: 'PLAYER.SOUTH',
      TICK: 'PLAYER.TICK',
      COMBAT: {
        MELEE: 'COMBAT.MELEE',
        RANGED: 'COMBAT.RANGED',
        RUN: 'COMBAT.RUN'
      }
    },
    MESSAGES: {
      ADD: 'MSGS.ADD',
      REMOVE: 'MSGS.REMOVE',
      ERROR: 'MSGS.ERROR',
      SPEAK: 'MSGS.SPEAK',
      GAIN: 'MSGS.GAIN',
      WARNING: 'MSGS.WARNING',
      SUCCESS: 'MSGS.SUCCESS'
    },
    PLANET: {
      GET: 'PLANET.GET'
    },
    ITEM: {
      USE: 'ITEM.USE'
    },
    BANK: {
      DEPOSIT: 'BANK.DEPOSIT',
      WITHDRAW: 'BANK.WITHDRAW',
      SAVE: 'BANK.SAVE',
      FETCH: 'BANK.FETCH',
      GET: 'BANK.GET'
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
      BOTHHANDS: 'both hands',
      FEET: 'feet',
      BODY: 'body',
      HEAD: 'head',
      ARMS: 'arms',
      HANDS: 'hands',
      LEGS: 'legs',
      NECK: 'neck',
      BACK: 'back',
      RFINGER: 'right finger',
      LFINGER: 'left finger',
    },
    SKILLS: {
      GAIN: 'SKILLS.GAIN',
      CRAFT: 'SKILLS.CRAFT',
      SAVE: 'SKILLS.SAVE',
      FETCH: 'SKILLS.FETCH',
      GET: 'SKILLS.GET',
      HIDING: 'SKILLS.HIDING',
      LUMBERJACKING: 'SKILLS.LUMBERJACKING',
      MEDITATION: 'SKILLS.MEDITATION',
      MINING: 'SKILLS.MINING',
      WRESTLING: 'SKILLS.WRESTLING'
    },
    MOBS: {
      CREATE: 'MOBS.CREATE',
      CLEAR_COMBAT: 'MOBS.CLEAR_COMBAT',
      IN_COMBAT: 'MOBS.IN_COMBAT',
      SHOW_ACTION: 'MOBS.SHOW_ACTION',
      SHOW_COMBAT: 'MOBS.SHOW_COMBAT',
      UPDATE: 'MOBS.UPDATE',
      TICK: 'MOBS.TICK'
    },
    QUEUE: {
      ADD: 'QUEUE.ADD',
      REMOVE: 'QUEUE.REMOVE'
    }
  },
  URLS: {
    API: 'https://andromeda.vintimilla.org',
    IMAGES: 'https://andromeda.vintimilla.org/static/images',
    PLAYER: '/player',
    USER: '/user',
    INVENTORY: '/inventory',
    BANK: '/bank',
    SKILLS: '/skill',
  },

  upperCase: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  randomKey: (text = '') => {
    return text + UUID(text);
  },

  notifySuccess: (store, msg) => {
    this.a.notify(store, msg, this.a.ACTIONS.MESSAGES.SUCCESS);
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
    if (!store) {
      config.error('store not defined', msg, type);
    }

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
    if (!store) {
      config.error('store not defined', type, payload);
    }

    setTimeout(() => store.dispatch({
      type: type,
      payload: payload
    }), 0);
  },

  getEquipped: (inventory) => {
    return {
      weapon: _.first(_.filter(inventory.weapons, (weapon) => {
        return weapon.equip.equipped === true;
      })),
      armor: _.filter(inventory.weapons, (weapon) => {
        return weapon.equip.equipped === true;
      })
    };
  },

  clone: (object) => {
    // Clone, but do not pass object params by reference (shallow).
    let new_object = {};
    for (let prop in object) {
      if (!_.isObject(object[prop])) {
        new_object[prop] = object[prop];
      } else {
        new_object[prop] = _.extend({}, object[prop]);
      }
    }

    return new_object;
  },

}

export default Config;