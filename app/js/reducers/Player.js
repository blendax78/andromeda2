import Config from '../components/Config';
let PLAYER = Config.ACTIONS.PLAYER;

const Player = (state = {}, action) => {
  state = (state.id) ? state : {
    id: 1,
    name: 'Blendax',
    planet_id: 1,
    x: 64,
    y: 485,
    hp: 67,
    maxhp: 67,
    mp: 15,
    maxmp: 15,
    stamina: 28,
    maxstamina: 28,
    strength: 33,
    intelligence: 15,
    dexterity: 28,
    user_id: 1,
    credits: 669,
    encumbrance: 0
  };

  const { type, payload } = action;

  switch (type) {
    case PLAYER.GET:
      // Do nothing
    break;
    case PLAYER.UPDATE:
      state = Config.partialUpdate(state, payload);
    break;
  }

  return state;
}

export default Player;
