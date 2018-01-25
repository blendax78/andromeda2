import Config from '../components/Config';
import { SkillData } from '../data/SkillData';

let SKILLS = Config.ACTIONS.SKILLS;

const Skills = (state = {}, action) => {
  const { type, payload } = action;
  // state.Skills = state.Skills || SkillData;
  if (!state.Skills) {
    state.Skills = SkillData;
    // dev settings
    // state.Skills = {...{'lumberjacking':{'current':15.8,'description':'','id':1,'modifier':0,'name':'Lumberjacking','primary':'strength','secondary':'dexterity'},'mining':{'current':12.3,'description':'','id':2,'modifier':0,'name':'Mining','primary':'strength','secondary':'dexterity'},'wrestling':{'current':0,'description':'','id':3,'modifier':0,'name':'Wrestling','primary':'strength','secondary':'dexterity'},'tailoring':{'current':0,'description':'','id':4,'modifier':0,'name':'Tailoring','primary':'dexterity','secondary':'intelligence'},'blacksmithing':{'current':5.899999999999998,'description':'','id':5,'modifier':0,'name':'Blacksmithing','primary':'strength','secondary':'dexterity'},'swordsmanship':{'current':0,'description':'','id':6,'modifier':0,'name':'Swordsmanship','primary':'strength','secondary':'dexterity'},'fencing':{'current':0,'description':'','id':7,'modifier':0,'name':'Fencing','primary':'dexterity','secondary':'strength'}};
  }

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

  let checkSkillGain = (skill, chance) => {
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
      // For every point above 65% chance, subtract 1 from probability of raise.
      let diff_modifier = (chance && 65 - chance < 0) ? (65 - chance) : 0;

      if (rand <= (100.0 - state.Skills[skill].current) + diff_modifier / (state.Skills[skill].current / 10)) {
        gain = 0.1;
      }
    }

    if (gain > 0) {
      state.Skills[skill].current = parseFloat((parseFloat(state.Skills[skill].current) + parseFloat(gain)).toFixed(1));
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

        Config.dispatch(store, Config.ACTIONS.INVENTORY.ADD,
          {
            item: payload.action.result.item,
            count: 1,
            score: true
        });
      }
    }
  };

  let checkCraftingSuccess = (payload) => {
    let random = Math.round(Math.random() * 100);
    let chance = ((payload.player_skill.current - payload.item.craft.skill.min) * 2) + 50;

    if (random < chance) {
      // success
      Config.notifyGain(store, `You craft ${payload.item.description}.`);

      checkSkillGain(payload.player_skill.name.toLowerCase(), payload.chance);

      Config.dispatch(store, Config.ACTIONS.INVENTORY.ADD, { item: payload.item.id, count: 1, craft: true, score: true });
      Config.dispatch(store, Config.ACTIONS.INVENTORY.REMOVE, { item: payload.item.craft.resource.id, count: payload.item.craft.resource.min });
    } else {
      // failure
      Config.notify(store, `You fail to craft ${payload.item.description}. Some of the materials are lost.`);
      Config.dispatch(store, Config.ACTIONS.INVENTORY.REMOVE, { item: payload.item.craft.resource.id, count: Math.floor(payload.item.craft.resource.min / 2) });

      if (payload.player_skill.current < 20.0) {
        checkSkillGain(payload.player_skill.name.toLowerCase());
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

      _.each(payload, (skill, index) => {
        // Need to parse this way to future-proof adding of new skill data.
        state.Skills[index] = {...state.Skills[index], ...skill};
      });
      // state.Skills = {...state.Skills, ...payload};

      for (let i in state.Skills) {
        if (state.Skills[i] && state.Skills[i].current) {
          state.Skills[i].current = parseFloat(state.Skills[i].current);
        }
      }
      break;
    case SKILLS.LUMBERJACKING:
      checkObjectSuccess('lumberjacking');
    break;
    case SKILLS.MINING:
      checkObjectSuccess('mining');
    break;
    case SKILLS.HIDING:
      console.log(SKILLS.HIDING);
    break;
    case SKILLS.CRAFT:
      // Handles all crafting skills
      checkCraftingSuccess(payload);
    break;
  }

  return state.Skills;
}

export default Skills;
