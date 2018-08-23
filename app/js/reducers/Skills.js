import Config from '../components/Config';
import { SkillData } from '../data/SkillData';

let SKILLS = Config.ACTIONS.SKILLS;

const Skills = (state = {}, action) => {
  const { type, payload } = action;

  state.Skills = state.Skills || SkillData;

  let notifySuccess = (msg) => {
    notify(msg, Config.ACTIONS.MESSAGES.SUCCESS);
  };

  let notifyGain = (msg) => {
    notify(msg, Config.ACTIONS.MESSAGES.GAIN);
  };

  let notifyError = (msg) => {
    notify(msg, Config.ACTIONS.MESSAGES.ERROR);
  };

  let notifyWarning = (msg) => {
    notify(msg, Config.ACTIONS.MESSAGES.WARNING);
  };

  let notify = (msg, type = Config.ACTIONS.MESSAGES.ADD) => {
    state.Queue.add('actions', type, { body: msg });
  };

  let checkStatGain = (skill) => {
    let gain = Math.round(_.random(1, 100) % 19);

    if (gain <= 1) {
      let player = state.Player;
      let statChance = _.random(1, 100);
      let stat = (statChance <= 75) ? state.Skills[skill].primary : state.Skills[skill].secondary;

      if (player[stat] < 100) {
        player[stat]++;

        state.Queue.add('actions', Config.ACTIONS.PLAYER.SAVE, state.Player);
        notifyGain(`${ Config.prettyPrint(stat) } increased by 1. It is now ${player[stat].toString()}.`);
      }
    }
  };

  let checkSkillGain = (skill, chance = undefined) => {
    let rand = _.random(1, 100);
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
      let diff_modifier = (chance && 65 - chance < 0) ? 65 - chance : 0;

      if (rand <= (100.0 - state.Skills[skill].current) + diff_modifier / (state.Skills[skill].current / 10) || rand <= 1) {
        // minimum 1 in 100 chance
        gain = 0.1;
      }
    }

    if (gain > 0) {
      state.Skills[skill].current = parseFloat((parseFloat(state.Skills[skill].current) + parseFloat(gain)).toFixed(1));
      checkStatGain(skill);

      state.Queue.add('actions', Config.ACTIONS.SKILLS.SAVE, { ...state.Skills, player_id: state.Player.id });
      notifyGain(`${ Config.prettyPrint(skill) } increased by ${gain.toString()}. It is now ${state.Skills[skill].current}.`);
    }
  };

  let checkResultSuccess = () => {
    if (payload.action && payload.action.result) {
      notifyGain(payload.action.result.message);

      if (payload.action.result.inventory === true) {
        state.Queue.add('actions', Config.ACTIONS.INVENTORY.ADD,
          {
            item: payload.action.result.item,
            count: (!!payload.action.current) ? payload.action.current : 1,
            score: true
        });
      }
    }
  };

  let checkCraftingSuccess = (payload) => {
    let random = _.random(1, 100);
    let chance = ((payload.player_skill.current - payload.item.craft.skill.min) * 2) + 50;
    let inventory_item = _.findWhere(state.Inventory.items, { id: payload.item.craft.resource.id });
    let count = (payload.item.countable === true) ? 5 : 1;

    if (!inventory_item || inventory_item.count < payload.item.craft.resource.min * count) {
      return;
    }

    if (random < chance) {
      // success
      if (!!payload.exceptional) {
        notifyGain(`You craft ${payload.item.description} of ${payload.exceptional.title} quality.`);
      } else {
        notifyGain(`You craft ${payload.item.description}.`);
      }

      checkSkillGain(payload.player_skill.name.toLowerCase(), payload.chance);

      state.Queue.add('actions', Config.ACTIONS.INVENTORY.ADD, { item: payload.item.id, count: count, craft: true, score: true, exceptional: payload.exceptional });
      state.Queue.add('actions', Config.ACTIONS.INVENTORY.REMOVE, { item: payload.item.craft.resource.id, count: payload.item.craft.resource.min * count });
    } else {
      // failure
      notify(`You fail to craft ${payload.item.description}. Some of the materials are lost.`);
      state.Queue.add('actions', Config.ACTIONS.INVENTORY.REMOVE, { item: payload.item.craft.resource.id, count: Math.floor((payload.item.craft.resource.min * count) / 2) });

      if (payload.player_skill.current < 20.0) {
        checkSkillGain(payload.player_skill.name.toLowerCase());
      }
    }

  };

  let checkLockpicking = (treasure) => {
    // skill_needed represents the  minimum skill (40% chance)
    let skill_needed = 100;

    switch (treasure.level) {
      case 0:
        skill_needed = 0;
      break;
      case 1:
        skill_needed = 5;
      break;
      case 2:
        skill_needed = 45;
      break;
      case 3:
        skill_needed = 65;
      break;
      case 4:
        skill_needed = 75;
      break;
      case 5:
        skill_needed = 99;
      break;
      case 6:
        skill_needed = 100;
      break;
    }

    let chest = _.findWhere(state.App.containers, { key: treasure.key });

    if (chest) {
      if (state.Skills.lockpicking.current + state.Skills.lockpicking.modifier < skill_needed) {
        notifyWarning('You have no idea how to pick that lock.');
        return false;
      }

      // Need to perform algebra to determine random max
      // skill_needed/x = 2/5
      // 2x = 5*skill_needed
      // x = 5*skill_needed / 2
      // x = skill_needed / 0.4
      let random_max = Math.round(skill_needed / 0.4);
      let random = _.random(1, random_max);
      let chance = (random_max > 0) ? 
        Math.round((state.Skills.lockpicking.current + state.Skills.lockpicking.modifier) / random_max) :
        40 + ((state.Skills.lockpicking.current + state.Skills.lockpicking.modifier) * 2);

      if ((random <= state.Skills.lockpicking.current + state.Skills.lockpicking.modifier) ||
        (random_max === 0 && _.random(1,100) <= 40)) {
        checkSkillGain('lockpicking', chance);
        notifySuccess('You quickly pick the lock.')
        state.Queue.add('actions', Config.ACTIONS.APP.CONTAINER_UNLOCK, { key: treasure.key });
        return true;
      } else {
        notify('You are unable to pick the lock.')
        if (state.Skills.lockpicking.current < 20.0) {
          // If under 20, check on fail.
          checkSkillGain('lockpicking');
        }
        return false;
      }
    }
  }

  let checkObjectSuccess = (skill) => {
    // This function is called when an object is clicked and a skill is checked.
    let random = _.random(1, 100);
    let object = _.findWhere(state.Planet.locations, { key: payload.key });

    if (object) {
      if (object.action.count < 1) {
        notify(object.action.maxMessage)
        return false;
      }

      if (random <= state.Skills[skill].current + state.Skills[skill].modifier) {
        checkSkillGain(skill);
        checkResultSuccess();
        object.action.current -= (!!object.action.increment) ? object.action.increment : 1;

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

  let hide = () => {
    let skill = state.Skills.hiding;
    // This function is called when an object is clicked and a skill is checked.
    let random = _.random(1, 100);

    if (random <= skill.current + skill.modifier) {
      notify('You have hidden yourself well.');
      checkSkillGain(skill.name.toLowerCase());

      state.Player.status.hide = true;
      return true;
    } else {
      notify('You fail to hide yourself.')
      if (skill.current < 20.0) {
        // If under 20, check on fail.
        checkSkillGain(skill.name.toLowerCase());
      }

      state.Player.status.hide = false;
      return false;
    }

  }

  let anatomy = (mob) => {
    let skill = state.Skills.animal_lore;
    let random = _.random(1, 100);

    if (random <= skill.current + skill.modifier) {
      notify('You discover some things about this creature.');
      checkSkillGain('anatomy');
console.log('anat', mob);
      return true;
    } else {
      notify('You do not know enough about this creature.')
      if (skill.current < 20.0) {
        // If under 20, check on fail.
        checkSkillGain('anatomy');
      }

      return false
    }
  };

  let animalLore = (mob) => {
    let skill = state.Skills.animal_lore;
    let random = _.random(1, 100);

    if (random <= skill.current + skill.modifier) {
      notify('You discover some things about this creature.');
      checkSkillGain('animal_lore');
console.log('AL', mob);
      return true;
    } else {
      notify('You do not know enough about this creature.')
      if (skill.current < 20.0) {
        // If under 20, check on fail.
        checkSkillGain('animal_lore');
      }

      return false
    }
  };

  let meditate = () => {
    let skill = state.Skills.meditation;
    let random = _.random(1, 100);

    if (random <= skill.current + skill.modifier) {
      notify('You enter a meditative trance.');
      checkSkillGain(skill.name.toLowerCase());

      state.Player.status.meditate = true;
      return true;
    } else {
      notify('You cannot focus your concentration.')
      if (skill.current < 20.0) {
        // If under 20, check on fail.
        checkSkillGain(skill.name.toLowerCase());
      }

      state.Player.status.meditate = false;
      return false;
    }

  }


  switch (type) {
    case SKILLS.GET:
      delete payload.player_id;
      _.each(payload, (skill, index) => {
        // Need to parse this way to future-proof adding of new skill data.
        state.Skills[index].current = skill.current;
        state.Skills[index].modifier = skill.modifier;
      });

      for (let i in state.Skills) {
        if (state.Skills[i] && state.Skills[i].current) {
          state.Skills[i].current = parseFloat(state.Skills[i].current);
          state.Skills[i].modifier = parseFloat(state.Skills[i].modifier);
        }
      }
      break;
    case SKILLS.LUMBERJACKING:
      checkObjectSuccess('lumberjacking');
    break;
    case SKILLS.MINING:
      checkObjectSuccess('mining');
    break;
    case SKILLS.LOCKPICKING:
      checkLockpicking(payload.treasure);
    break;
    case SKILLS.HIDING:
      hide();
    break;
    case SKILLS.MEDITATION:
      meditate();
    break;
    case SKILLS.ANATOMY:
      anatomy(payload.mob);
    break;
    case SKILLS.ANIMAL_LORE:
      animalLore(payload.mob);
    break;
    case SKILLS.CRAFT:
      // Handles all crafting skills
      checkCraftingSuccess(payload);
    break;
    case SKILLS.GAIN:
      checkSkillGain(payload.name)
    break;
  }

  return state.Skills;
}

export default Skills;
