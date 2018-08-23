// System-wide functions and variables.
import * as UUID from 'uuid';

const Config = {
  APPNAME: 'Andromeda',
  ENV: (location.href.indexOf('localhost') !== -1) ? 'dev' : 'prod',
  ACTIONS: {
    APP: {
      MODAL_SHOW: 'APP.MODAL.SHOW',
      MODAL_HIDE: 'APP.MODAL.HIDE',
      MODAL_UPDATE: 'APP.MODAL.UPDATE',
      CONTAINER_CREATE: 'APP.CONTAINER.CREATE',
      CONTAINER_UNLOCK: 'APP.CONTAINER.UNLOCK'
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
      UP: 'PLAYER.UP',
      DOWN: 'PLAYER.DOWN',
      TICK: 'PLAYER.TICK',
      DUNGEON: 'PLAYER.DUNGEON',
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
      GET: 'PLANET.GET',
      TICK: 'PLANET.TICK',
      CLEAR_TIMER: 'PLANET.CLEAR_TIMER',
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
      ANATOMY: 'SKILLS.ANATOMY',
      ANIMAL_LORE: 'SKILLS.ANIMAL_LORE',
      HIDING: 'SKILLS.HIDING',
      LOCKPICKING: 'SKILLS.LOCKPICKING',
      LUMBERJACKING: 'SKILLS.LUMBERJACKING',
      MEDITATION: 'SKILLS.MEDITATION',
      MINING: 'SKILLS.MINING',
      WRESTLING: 'SKILLS.WRESTLING'
    },
    MOBS: {
      CREATE: 'MOBS.CREATE',
      CLEAR_COMBAT: 'MOBS.CLEAR_COMBAT',
      CLEAR_TIMER: 'MOBS.CLEAR_TIMER',
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
  SETTINGS: {
    SKILL_TIMEOUT: 11
  },

  upperCase: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  prettyPrint: (string) => {
    let result = '';
    if (string.indexOf('_') !== -1) {
      let string_data = string.split('_');

      for (let i in string_data) {
        result += this.a.upperCase(string_data[i]) + ' ';
      }
    } else {
      result = this.a.upperCase(string);
    }

    return result.trim();
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

  Item: (item) => {
    let get = undefined;

    if (!_.isUndefined(item)) {
      get = (prop) => {
        switch (prop) {
          case 'description':
            let description = '';

            if (item.countable === true) {
              description = `${item.count.toString()} ${(item.count === 1) ? item.name : item.plural}`;
            } else {
              description = (!!item.description && item.description.length > 0) ? item.description : item.name;

              if (!!item.exceptional) {
                if (description.indexOf('an ') === 0 && !!item.exceptional.title) {
                  description = `${item.exceptional.title} ${description.slice(3)}`.trim();
                } else if (description.indexOf('a ') === 0 && !!item.exceptional.title) {
                  description = `${item.exceptional.title} ${description.slice(2)}`.trim();
                }

                description = ('aeiou'.includes(description[0].toLowerCase())) ? `an ${description}` : `a ${description}`;
              }
            }

            return description;
          break;
            case 'weapon':
              return {
                ...item.weapon,
                min: (!!item.exceptional && !!item.exceptional.bonus) ? item.weapon.min + item.exceptional.bonus : item.weapon.min,
                max: (!!item.exceptional && !!item.exceptional.bonus) ? item.weapon.max + item.exceptional.bonus : item.weapon.max
              };
            break;
            case 'armor':
              return {
                ...item.armor,
                physical: (!!item.exceptional && !!item.exceptional.bonus) ? item.armor.physical + item.exceptional.bonus : item.armor.physical
              };
            break;
          default:
            return (!_.isUndefined(item[prop])) ? item[prop] : undefined;
          break;
        }
      };

    } else {
      get = (prop) => {
        return false;
      };
    }
    return {
      get: get
    };
  },

  Player: (player) => {
    let get = undefined;

    if (_.isUndefined(player)) {
      get = (prop) => {
        switch (prop) {
          case 'title':
            // return karma title?
          break;
          default:
            return (!_.isUndefined(player[prop])) ? player[prop] : undefined;
          break;
        }
      };
    } else {
      get = (prop) => {
        return '';
      }
    }
    return {
      get: get
    };
  },

  Skills: (skills) => {
    let get = undefined;

    if (!_.isUndefined(skills)) {
      get = (prop) => {
        switch (prop) {
          case 'title':
            // return skill title?
          break;
          default:
            return (!_.isUndefined(skills[prop])) ? skills[prop] : undefined;
          break;
        }
      };
    } else {
      get = (prop) => {
        return '';
      }
    }
    return {
      get: get
    };
  },

  dev: () => {
    // store should be accessible in dev mode
    // quick access to debugging settings
    store.getState().Skills.swordsmanship.current = 100;
    store.getState().Skills.tactics.current = 100;
    store.getState().Player.strength = 100;
    store.getState().Player.dexterity = 100;
    store.getState().Player.credits = 1000;
    store.getState().Player.status.hp_regen = 5;
    store.getState().Player.status.mp_regen = 5;
    store.getState().Player.status.stamina_regen = 5;
    store.getState().Player.x = 666;

    return {
      goto: function(x,y) {
        store.getState().Player.x = x;
        store.getState().Player.y = y;
      }
    }

  }

}

export default Config;