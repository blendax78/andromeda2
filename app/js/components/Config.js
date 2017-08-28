// System-wide functions and variables.
let Config = {
  appName: 'Andromeda',
  ACTIONS: {
    USER: {
      GET: 'USER.GET'
    },
    PLAYER: {
      GET: 'PLAYER.GET',
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
      GAIN: 'MSGS.GAIN'
    },
    PLANET: {
      GET: 'PLANET.GET'
    },
    ITEM: {
      USE: 'ITEM.USE'
    },
    INVENTORY: {
      ADD: 'INVENTORY.ADD',
      REMOVE: 'INVENTORY.REMOVE',
      SELL: 'INVENTORY.SELL',
      EQUIP: 'INVENTORY.EQUIP',
      UNEQUIP: 'INVENTORY.UNEQUIP'
    },
    SKILLS: {
      LUMBERJACKING: 'SKILLS.LUMBERJACKING',
      MINING: 'SKILLS.MINING'
    }
  },

  upperCase: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  randomKey: (text = '') => {
    return text + new Date().getTime() + Math.round(Math.random() * 1000000);
  },

  notifyGain: (store, msg) => {
    this.a.notify(store, msg, this.a.ACTIONS.MESSAGES.GAIN);
  },

  notify: (store, msg, type = this.a.ACTIONS.MESSAGES.ADD) => {
    setTimeout(() => store.dispatch({
      type: this.a.ACTIONS.MESSAGES.GAIN,
      payload: {
        body: msg
      }
    }), 0);
  }

}

export default Config;