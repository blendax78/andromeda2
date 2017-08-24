import Config from '../components/Config';
import { SkillData } from '../data/SkillData';

let SKILLS = Config.ACTIONS.SKILLS;

const Skills = (state = {}, action) => {
  const { type, payload } = action;
  state = (state.lumberjacking) ? state : SkillData;

  let checkStatGain = (skill) => {
    let gain = Math.round((Math.random() * 100) % 19);

    if (gain <= 1) {
      let stat = Math.round(Math.random() * 100);
      if (stat <= 75) {
        console.log(state[skill].primary);
      } else {
        console.log(state[skill].secondary);
      }
    }
  };

  let checkSkillGain = (skill) => {
    let rand = Math.random() * 100;

    if (state[skill].current < 20.0) {
      // Give a greater chance for skill gain.
      let skillValue = 30.0 - state[skill].current;

      if (rand <= skillValue) {
        // 0.1 - 0.3
        state[skill].current = parseFloat((state[skill].current + Math.ceil(Math.random() * 3) / 10).toFixed(1));
        checkStatGain(skill);
      }
    } else {
      if (rand <= (100.0 - state[skill].current) / 10.0) {
        state[skill].current += 0.1;
        checkStatGain(skill);
        return true;
      }
    }
  };

  let checkSuccess = (skill) => {
    let random = Math.round(Math.random() * 100);

    if (random <= state[skill].current + state[skill].modifier) {
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
