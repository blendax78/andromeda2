// System-wide functions and variables.
let Config = {
  appName: 'Andromeda',
  ACTIONS: {
    USER: {
      GET: 'USER_GET'
    },
    PLAYER: {
      GET: 'PLAYER_GET',
      ENCUMBRANCE: 'PLAYER_ENCUMBRANCE',
      UPDATE: 'PLAYER_UPDATE',
      RUN: 'PLAYER_RUN',
      MOUNT: 'PLAYER_MOUNT',
      EAST: 'PLAYER_EAST',
      WEST: 'PLAYER_WEST',
      NORTH: 'PLAYER_NORTH',
      SOUTH: 'PLAYER_SOUTH',
      TICK: 'PLAYER_TICK'
    },
    MESSAGES: {
      ADD: 'MSGS_ADD',
      REMOVE: 'MSGS_REMOVE',
      ERROR: 'MSGS_ERROR',
      SPEAK: 'MSGS_SPEAK',
      GAIN: 'MSGS_GAIN'
    },
    PLANET: {
      GET: 'PLANET_GET'
    },
    ITEM: {
      USE: 'ITEM_USE'
    },
    INVENTORY: {
      ADD: 'INVENTORY_ADD',
      REMOVE: 'INVENTORY_REMOVE',
      SELL: 'INVENTORY_SELL',
      EQUIP: 'INVENTORY_EQUIP',
      UNEQUIP: 'INVENTORY_UNEQUIP'
    },
    SKILLS: {
      LUMBERJACKING: 'SKILLS_LUMBERJACKING',
      MINING: 'SKILLS_MINING'
    }
  },

  upperCase: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  randomKey: (text = '') => {
    return text + new Date().getTime() + Math.round(Math.random() * 10000);
  },

  partialUpdate: (original, newValues) => {
    // Both inputs should be objects;
    // Using _clone will not update state.

    for (let i in newValues) {
      original[i] = newValues[i];
    }

    return original;
  }
}

export default Config;