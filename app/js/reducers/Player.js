import Config from '../components/Config';
let PLAYER = Config.ACTIONS.PLAYER;

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
    hp: Math.round(20/2) + 50,
    maxhp: Math.round(20/2) + 50,
    mp: 20,
    maxmp: 20,
    stamina: 20,
    maxstamina: 20,
    strength: 20,
    intelligence: 20,
    dexterity: 20,
    user_id: 1,
    credits: 15,
    encumbrance: 0,
    hide: false,
    run: false,
    mount: false,
    partial: {
      stamina: 0,
      hp: 0,
      mp: 0
    }
  };

  const { type, payload } = action;

  let update_stamina = (change) => {
    if (state.stamina + change < 0) {
      return 0;
    } else if (state.stamina + change > state.maxstamina) {
      return state.maxstamina;
    } else {
      return state.stamina + change;
    }
  };

  let update_hp = (change) => {
    if (state.hp + change < 0) {
      return 0;
    } else if (state.hp + change > state.maxhp) {
      return state.maxhp;
    } else {
      return state.hp + change;
    }
  }

  let update_mp = (change) => {
    if (state.mp + change < 0) {
      return 0;
    } else if (state.mp + change > state.maxmp) {
      return state.maxmp;
    } else {
      return state.mp + change;
    }
  }

  let move = (current, change, max,) => {
    if (change > 0 && current + change > max) {
      return max;
    } else if (change < 0 && current + change < 0) {
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

  let update_partials = (stat) => {
    switch (stat) {
      case 'stamina':
        state.partial.stamina += 0.2;
        if (Math.floor(state.partial.stamina) === 1) {
          state.partial.stamina = 0;
          return true;
        }
      break;
      case 'hp':
        state.partial.hp += 0.2;
        if (Math.floor(state.partial.hp) === 1) {
          state.partial.hp = 0;
          return true;
        }
      break;
      case 'mp':
        state.partial.mp += 0.2;
        if (Math.floor(state.partial.mp) === 1) {
          state.partial.mp = 0;
          return true;
        }
      break;
    }

    return false;
  };

  let newState = {};

  switch (type) {
    case PLAYER.GET:
      // Do nothing
    break;
    case PLAYER.UPDATE:
      state = Config.partialUpdate(state, payload);
    break;
    case PLAYER.EAST:
      newState.x = move(state.x, increment(), payload.maxx);
      newState.stamina = (state.run) ? update_stamina(-1) : state.stamina;
      newState.run = (newState.stamina === 0) ? false : state.run;
      
      state = Config.partialUpdate(state, newState);
    break;
    case PLAYER.WEST:
      newState.x = move(state.x, -increment(), payload.maxx);
      newState.stamina = (state.run) ? update_stamina(-1) : state.stamina;
      newState.run = (newState.stamina === 0) ? false : state.run;

      state = Config.partialUpdate(state, newState);
    break;
    case PLAYER.NORTH:
      newState.y = move(state.y, -increment(), payload.maxy);
      newState.stamina = (state.run) ? update_stamina(-1) : state.stamina;
      newState.run = (newState.stamina === 0) ? false : state.run;
      
      state = Config.partialUpdate(state, newState);
    break;
    case PLAYER.SOUTH:
      newState.y = move(state.y, increment(), payload.maxy);
      newState.stamina = (state.run) ? update_stamina(-1) : state.stamina;
      newState.run = (newState.stamina === 0) ? false : state.run;

      state = Config.partialUpdate(state, newState);
    break;
    case PLAYER.TICK:
      if (update_partials('hp')) {
        newState.hp = update_hp(1);  
      }
      
      if (update_partials('mp')) {
        newState.mp = update_mp(1);
      }

      if (update_partials('stamina')) {
        newState.stamina = update_stamina(1);
      }

      state = Config.partialUpdate(state, newState);
    break;
  }

  return state;
}

export default Player;
