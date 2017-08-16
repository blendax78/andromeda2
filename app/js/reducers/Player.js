import Config from '../components/Config';
let PLAYER = Config.ACTIONS.PLAYER;
let MAP = Config.ACTIONS.MAP;

// Attribute Formula
// Health  (Strength / 2) + Strength Bonus+ 50
// Mana  Intelligence + Intelligence Bonus
// Stamina Dexterity + Dexterity Bonus

const Player = (state = {}, action) => {
  state = (state.id) ? state : {
    id: 1,
    name: 'Blendax',
    planet_id: 1,
    x: 0,
    y: 0,
    hp: Math.round(15/2) + 50,
    maxhp: Math.round(15/2) + 50,
    mp: 15,
    maxmp: 15,
    stamina: 15,
    maxstamina: 15,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
    user_id: 1,
    credits: 15,
    encumbrance: 0,
    run: false,
    mount: false
  };

  const { type, payload } = action;

  let move = (current, change, max,) => {
    if (change > 0 && current + change > max) {
      return max;
    } else if (change < 0 && current - change < 0) {
      return 0;
    } else {
      return current + change;
    }
  };

  let increment = () => {
    if (state.run) {
      return 2;
    } else if (state.mount) {
      return 3;
    } else {
      return 1;
    }
  }

  // running needs to decrease stamina
  switch (type) {
    case PLAYER.GET:
      // Do nothing
    break;
    case PLAYER.UPDATE:
      state = Config.partialUpdate(state, payload);
    break;
    case MAP.EAST:
      state = Config.partialUpdate(state, { x: move(state.x, increment(), payload.maxx) });
    break;
    case MAP.WEST:
      state = Config.partialUpdate(state, { x: move(state.x, -increment(), payload.maxx) });
    break;
    case MAP.NORTH:
      state = Config.partialUpdate(state, { y: move(state.y, -increment(), payload.maxy) });
    break;
    case MAP.SOUTH:
      state = Config.partialUpdate(state, { y: move(state.y, increment(), payload.maxy) });
    break;
  }

  return state;
}

export default Player;
