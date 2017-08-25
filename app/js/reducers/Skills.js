import Config from '../components/Config';
import { SkillData } from '../data/SkillData';

let SKILLS = Config.ACTIONS.SKILLS;

const Skills = (state = {}, action) => {
  const { type, payload } = action;

  state.Skills = state.Skills || SkillData;

  let notifyGain = (msg) => {
    setTimeout(() => store.dispatch({
      type: Config.ACTIONS.MESSAGES.GAIN,
      payload: {
        body: msg
      }
    }), 0);
  };

  let checkStatGain = (skill) => {
    let gain = Math.round((Math.random() * 100) % 19);

    if (gain <= 1) {
      let player = state.Player;
      let statChance = Math.round(Math.random() * 100);
      let stat = (statChance <= 75) ? state.Skills[skill].primary : state.Skills[skill].secondary;

      if (player[stat] < 100) {
        player[stat]++;
        notifyGain(`${ Config.upperCase(stat) } increased by 1.`);
      }
    }
  };

  let checkSkillGain = (skill) => {
    let rand = Math.random() * 100;
    let gain = 0;

    if (state.Skills[skill].current < 20.0) {
      // Give a greater chance for skill gain.
      let skillValue = 30.0 - state.Skills[skill].current;

      if (rand <= skillValue) {
        // 0.1 - 0.3
        gain = parseFloat((Math.ceil(Math.random() * 3) / 10).toFixed(1));
      }
    } else if (state.Skills[skill].current < 100.0) {
      if (rand <= (100.0 - state.Skills[skill].current) / 10.0) {
        gain = 0.1;
      }
    }

    if (gain > 0) {
      state.Skills[skill].current += parseFloat(gain);
      checkStatGain(skill);

      notifyGain(`${ Config.upperCase(skill) } increased by ${ gain.toString() }.`);
    }
  };

  let checkSuccess = (skill) => {
    let random = Math.round(Math.random() * 100);

    if (random <= state.Skills[skill].current + state.Skills[skill].modifier) {
      checkSkillGain(skill);
      return true;
    } else {
      if (state.Skills[skill].current < 20.0) {
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

  return state.Skills;
}

export default Skills;
