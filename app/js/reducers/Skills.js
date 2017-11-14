import Config from '../components/Config';
import { SkillData } from '../data/SkillData';

let SKILLS = Config.ACTIONS.SKILLS;

const Skills = (state = {}, action) => {
  const { type, payload } = action;

  state.Skills = state.Skills || SkillData;

  let checkStatGain = (skill) => {
    let gain = Math.round((Math.random() * 100) % 19);

    if (gain <= 1) {
      let player = state.Player;
      let statChance = Math.round(Math.random() * 100);
      let stat = (statChance <= 75) ? state.Skills[skill].primary : state.Skills[skill].secondary;

      if (player[stat] < 100) {
        player[stat]++;

        Config.dispatch(store, Config.ACTIONS.PLAYER.SAVE, state.Player);
        Config.notifyGain(store, `${ Config.upperCase(stat) } increased by 1.`);
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

      Config.dispatch(store, Config.ACTIONS.SKILLS.SAVE, { ...state.Skills, player_id: state.Player.id });
      Config.notifyGain(store, `${ Config.upperCase(skill) } increased by ${ gain.toString() }.`);
    }
  };

  let checkResultSuccess = () => {
    if (payload.action && payload.action.result) {
      Config.notifyGain(store, payload.action.result.message);

      if (payload.action.result.inventory === true) {

        if (state.Player.encumbrance >= state.Player.maxencumbrance) {
          Config.notify(store, 'You cannot carry any more.');
          return;
        }

        setTimeout(() => store.dispatch({
          type: Config.ACTIONS.INVENTORY.ADD,
          payload: {
            item: payload.action.result.item,
            count: 1,
            score: true
          }
        }), 0);
      }
    }
  };

  let checkObjectSuccess = (skill) => {
    // This function is called when an object is clicked and a skill is checked.
    let random = Math.round(Math.random() * 100);
    let object = _.findWhere(state.Planet.locations, { key: payload.key });

    if (object) {
      if (object.action.count < 1) {
        Config.notify(store, object.action.maxMessage)
        return false;
      }

      if (random <= state.Skills[skill].current + state.Skills[skill].modifier) {
        object.action.current--;
        checkSkillGain(skill);
        checkResultSuccess();
        return true;
      } else {
        if (state.Skills[skill].current < 20.0) {
          // If under 20, check on fail.
          checkSkillGain(skill);
        }
        return false;
      }
    }
  }

  switch (type) {
    case SKILLS.GET:
      delete payload.player_id;

      state.Skills = {...state.Skills, ...payload};
      break;
    case SKILLS.LUMBERJACKING:
      checkObjectSuccess('lumberjacking');
    break;
    case SKILLS.MINING:
      checkObjectSuccess('mining');
    break;
  }

  return state.Skills;
}

export default Skills;
