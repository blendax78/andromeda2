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
    x: 200,
    y: 500,
    hp: undefined,
    mp: undefined,
    stamina: undefined,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
    user_id: 1,
    credits: 15,
    encumbrance: 0,
    move: 1,
    status: {
      inn: false,
      meditate: false,
      hide: false,
      run: false,
      mount: false,
      encumbered: false,
      paralyzed: false,
      hp_regen: 0,
      mp_regen: 0,
      stamina_regen: 0,
      dead: false
    },
    effects: {
      dexterity: undefined,
      strength: undefined,
      intelligence: undefined
    },
    defense: {
      physical: 0,
      dexterity: 0
    },
    offense: {
      speed: 2,
      min: 1,
      max: 4,
      skill: 3
    },
    partial: {
      stamina: 0,
      hp: 0,
      mp: 0
    },
    score: {
      kills: 0,
      walked: 0,
      run: 0,
      log: 0,
      ore: 0,
      crafted: 0,
      deaths: 0,
      timer: 0,
      flee: 0
    },
  };

  state.Player.get = (stat) => {
    return (state.Player[stat] !== state.Player.effects[stat] && !_.isUndefined(state.Player.effects[stat])) ? state.Player.effects[stat] : state.Player[stat];
  };

  const { type, payload } = action;

  let update_stats = () => {
    state.Player.maxhp = Math.round(state.Player.get('strength') / 2) + 50;
    state.Player.maxmp = state.Player.get('intelligence');
    state.Player.maxstamina = state.Player.get('dexterity');
    state.Player.maxencumbrance = state.Player.get('strength') * 4;

    state.Player.hp = (!_.isUndefined(state.Player.hp)) ? state.Player.hp : Math.round(state.Player.get('strength') / 2) + 50;
    state.Player.mp = (!_.isUndefined(state.Player.mp)) ? state.Player.mp : state.Player.get('intelligence');
    state.Player.stamina = (!_.isUndefined(state.Player.stamina)) ? state.Player.stamina : state.Player.get('dexterity');

    state.Player.status.encumbered = state.Player.encumbrance > state.Player.maxencumbrance;
    state.Player.status.run = (state.Player.status.encumbered || state.Player.stamina < 1) ? false : state.Player.status.run;
  };

  if (_.isUndefined(state.Player.hp)) {
    update_stats();
  }

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
    change = (state.Player.encumbered === true || state.Player.paralyzed === true) ? 0 : change;

    if (change > 0 && current + change > max) {
      return max;
    } else if (change < 0 && current + change < 0) {
      return 0;
    } else {
      return current + change;
    }
  };

  let increment = () => {
    if (state.Player.status.run) {
      state.Player.score.run++;
      return 2;
    } else if (state.Player.mount) {
      return 3;
    } else {
      state.Player.score.walked++;
      return 1;
    }
  }

  let update_partials = (stat) => {
    switch (stat) {
      case 'stamina':
        state.Player.partial.stamina += (0.2 + state.Player.status.stamina_regen);
        if (Math.floor(state.Player.partial.stamina) >= 1) {
          state.Player.partial.stamina = 0;
          return true;
        }
      break;
      case 'hp':
        state.Player.partial.hp += (0.1 + state.Player.status.hp_regen);
        if (Math.floor(state.Player.partial.hp) >= 1) {
          state.Player.partial.hp = 0;
          return true;
        }
      break;
      case 'mp':
        let mp_change = 0.2;

        /*
          https://uo.stratics.com/content/skills/meditation.php

          Let Meditation Bonus be 0.0075 * Meditation Skill + 0.0025 * Intelligence Attribute
          If your Meditation Skill is GM or above, multiple Meditation Bonus by 1.1
          If you are actively meditating, multiply Meditation Bonus by 2
        */

        mp_change *= (state.Skills.meditation.current >= 100) ? 1.1 : 1;
        mp_change += (0.0075 * state.Skills.meditation.current) + (0.0025 * state.Player.intelligence);
        mp_change *= (state.Player.status.meditate === true) ? 2 : 1;

        state.Player.partial.mp += (mp_change + state.Player.status.mp_regen);
        if (Math.floor(state.Player.partial.mp) >= 1) {
          state.Player.partial.mp = 0;
          return true;
        }
      break;
    }

    return false;
  };

  switch (type) {
    case PLAYER.GET:
      let score = { ...state.Player.score, ...payload.score };
      let status = { ...state.Player.status, ...payload.status };
      let effects = { ...state.Player.effects, ...payload.effects };

      state.Player = {...state.Player, ...payload };
      state.Player.score = score;
      state.Player.status = status;
      state.Player.effects = effects;

    break;
    case PLAYER.UPDATE:
      state.Player = {...state.Player, ...payload};
    break;
    case PLAYER.RUN:
      state.Player.status.run = payload.run;
    break;
    case PLAYER.EAST:
      state.Player.x = move(state.Player.x, increment(), payload.maxx);
      state.Player.stamina = (state.Player.status.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.status.run = (state.Player.stamina === 0) ? false : state.Player.status.run;
    break;
    case PLAYER.WEST:
      state.Player.x = move(state.Player.x, -increment(), payload.maxx);
      state.Player.stamina = (state.Player.status.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.status.run = (state.Player.stamina === 0) ? false : state.Player.status.run;
    break;
    case PLAYER.NORTH:
      state.Player.y = move(state.Player.y, -increment(), payload.maxy);
      state.Player.stamina = (state.Player.status.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.status.run = (state.Player.stamina === 0) ? false : state.Player.status.run;
    break;
    case PLAYER.SOUTH:
      state.Player.y = move(state.Player.y, increment(), payload.maxy);
      state.Player.stamina = (state.Player.status.run) ? update_stamina(-1) : state.Player.stamina;
      state.Player.status.run = (state.Player.stamina === 0) ? false : state.Player.status.run;
    break;
    case PLAYER.TICK:
      state.Player.score.timer++;

      if (state.Player.status.dead) {
        break;
      }

      if (state.Player.status.inn !== false) {
        state.Player.credits -= state.Player.status.inn;
      }

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
    case PLAYER.COMBAT.RUN:
      state.Combat.actions.run = payload.run;
    break;
    case PLAYER.COMBAT.MELEE:
      state.Combat.actions.melee = payload.melee;
    break;
    case PLAYER.COMBAT.RANGED:
      state.Combat.actions.ranged = payload.ranged;
    break;
  }

  update_stats();

  return state.Player;
}

export default Player;
