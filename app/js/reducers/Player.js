import Config from '../components/Config';
let PLAYER = Config.ACTIONS.PLAYER;
let MAP = Config.ACTIONS.MAP;

const Player = (state = {}, action) => {
  state = (state.id) ? state : {
    id: 1,
    name: 'Blendax',
    planet_id: 1,
    x: 0,
    y: 0,
    hp: 50,
    maxhp: 50,
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
    run: false
  };

  const { type, payload } = action;

  switch (type) {
    case PLAYER.GET:
      // Do nothing
    break;
    case PLAYER.UPDATE:
      state = Config.partialUpdate(state, payload);
    break;
    case MAP.EAST:
      state = Config.partialUpdate(state, { x: state.x + 1 });
    break;
    case MAP.WEST:
      state = Config.partialUpdate(state, { x: state.x - 1 });
    break;
    case MAP.NORTH:
      state = Config.partialUpdate(state, { y: state.y - 1 });
    break;
    case MAP.SOUTH:
      state = Config.partialUpdate(state, { y: state.y + 1 });
    break;
  }

  return state;
}

export default Player;
