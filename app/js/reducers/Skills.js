import Config from '../components/Config';
import { SkillData } from '../data/SkillData';

let SKILLS = Config.ACTIONS.SKILLS;

const Skills = (state = {}, action) => {
  const { type, payload, store } = action;

  state = (state.lumberjacking) ? state : SkillData;

  let checkStatGain = (skill) => {
    if (!store || !store.getState().Player) {
      return;
    }

    let gain = Math.round((Math.random() * 100) % 19);

    if (gain <= 1) {
      let player = store.getState().Player;
      let statChance = Math.round(Math.random() * 100);
      let stat = (statChance <= 75) ? state[skill].primary : state[skill].secondary;

      if (player[stat] < 100) {
        player[stat]++;
        setTimeout(() => store.dispatch({
          type: Config.ACTIONS.MESSAGES.GAIN,
          payload: {
            body: `${ Config.upperCase(stat) } increased by 1.`
          }
        }), 0);
      }
    }
  };

  let checkSkillGain = (skill) => {
    let rand = Math.random() * 100;
    let gain = 0;

    if (state[skill].current < 20.0) {
      // Give a greater chance for skill gain.
      let skillValue = 30.0 - state[skill].current;

      if (rand <= skillValue) {
        // 0.1 - 0.3
        gain = parseFloat((Math.ceil(Math.random() * 3) / 10).toFixed(1));
      }
    } else if (state[skill].current < 100.0) {
      if (rand <= (100.0 - state[skill].current) / 10.0) {
        gain = 0.1;
      }
    }

    if (gain > 0) {
      state[skill].current += parseFloat(gain);
      checkStatGain(skill);

      setTimeout(() => store.dispatch({
        type: Config.ACTIONS.MESSAGES.GAIN,
        payload: {
          body: `${ Config.upperCase(skill) } increased by ${ gain.toString() }.`
        }
      }), 0);
    }
  };

  let checkSuccess = (skill) => {
    let random = Math.round(Math.random() * 100);

    if (random <= state[skill].current + state[skill].modifier) {
      checkSkillGain(skill);
      return true;
    } else {
      if (state[skill].current < 20.0) {
        // If under 20, check on fail.
        checkSkillGain(skill);
      }
      return false;
    }
  }

  switch (type) {
    case SKILLS.LUMBERJACKING:
      checkSuccess('lumberjacking');
    break;
    case SKILLS.MINING:
      checkSuccess('mining');
    break;
  }

  return state;
}

export default Skills;
