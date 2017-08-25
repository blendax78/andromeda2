import Config from '../components/Config';
let PLAYER = Config.ACTIONS.PLAYER;

// Attribute Formula
// Health  (Strength / 2) + Strength Bonus+ 50
// Mana  Intelligence + Intelligence Bonus
// Stamina Dexterity + Dexterity Bonus

const Player = (state = {}, action) => {
  state.Player = state.Player || {
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
    if (state.Player.stamina + change < 0) {
      return 0;
    } else if (state.Player.stamina + change > state.Player.maxstamina) {
      return state.Player.maxstamina;
    } else {
      return state.Player.stamina + change;
    }
  };

  let update_hp = (change) => {
    if (state.Player.hp + change < 0) {
      return 0;
    } else if (state.Player.hp + change > state.Player.maxhp) {
      return state.Player.maxhp;
    } else {
      return state.Player.hp + change;
    }
  }

  let update_mp = (change) => {
    if (state.Player.mp + change < 0) {
      return 0;
    } else if (state.Player.mp + change > state.Player.maxmp) {
      return state.Player.maxmp;
    } else {
      return state.Player.mp + change;
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
    if (state.Player.run) {
      return 2;
    } else if (state.Player.mount) {
      return 3;
    } else {
      return 1;
    }
  }

  let update_partials = (stat) => {
    switch (stat) {
      case 'stamina':
        state.Player.partial.stamina += 0.2;
        if (Math.floor(state.Player.partial.stamina) === 1) {
          state.Player.partial.stamina = 0;
          return true;
        }
      break;
      case 'hp':
        state.Player.partial.hp += 0.2;
        if (Math.floor(state.Player.partial.hp) === 1) {
          state.Player.partial.hp = 0;
          return true;
        }
      break;
      case 'mp':
        state.Player.partial.mp += 0.2;
        if (Math.floor(state.Player.partial.mp) === 1) {
          state.Player.partial.mp = 0;
          return true;
        }
      break;
    }

    return false;
  };

  switch (type) {
    case PLAYER.GET:
      // Do nothing
    break;
    case PLAYER.UPDATE:
      state.Player = {...state.Player, payload};
    break;
    case PLAYER.EAST:
      state.Player.x = move(state.Player.x, increment(), payload.maxx);
      state.Player.stamina = (state.Player.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.run = (state.Player.stamina === 0) ? false : state.Player.run;
    break;
    case PLAYER.WEST:
      state.Player.x = move(state.Player.x, -increment(), payload.maxx);
      state.Player.stamina = (state.Player.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.run = (state.Player.stamina === 0) ? false : state.Player.run;
    break;
    case PLAYER.NORTH:
      state.Player.y = move(state.Player.y, -increment(), payload.maxy);
      state.Player.stamina = (state.Player.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.run = (state.Player.stamina === 0) ? false : state.Player.run;
    break;
    case PLAYER.SOUTH:
      state.Player.y = move(state.Player.y, increment(), payload.maxy);
      state.Player.stamina = (state.Player.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.run = (state.Player.stamina === 0) ? false : state.Player.run;
    break;
    case PLAYER.TICK:
      if (update_partials('hp')) {
        state.Player.hp = update_hp(1);  
      }
      
      if (update_partials('mp')) {
        state.Player.mp = update_mp(1);
      }

      if (update_partials('stamina')) {
        state.Player.stamina = update_stamina(1);
      }
    break;
  }

  return state.Player;
}

export default Player;
