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
      MOUNT: 'PLAYER_MOUNT'
    },
    MESSAGES: {
      ADD: 'MSGS_ADD',
      REMOVE: 'MSGS_REMOVE'
    },
    MAP: {
      EAST: 'MAP_EAST',
      WEST: 'MAP_WEST',
      NORTH: 'MAP_NORTH',
      SOUTH: 'MAP_SOUTH'
    },
    PLANET: {
      GET: 'PLANET_GET'
    }
  },

  randomKey: (text = '') => {
    return text + new Date().getTime() + Math.round(Math.random() * 10000);
  },

  partialUpdate: (original, newValues) => {
    // Both inputs should be objects;

    for (let i in newValues) {
      original[i] = newValues[i];
    }

    return original;
  }
}

export default Config;