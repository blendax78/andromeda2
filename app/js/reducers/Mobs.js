import Config from '../components/Config';
let MOBS = Config.ACTIONS.MOBS;

const Mobs = (state = {}, action) => {
  state.Mobs = state.Mobs || {
    list: {},
    showAction: false,
    showCombat: false,
    combat: undefined,
    recent_combat: []
  };

  const { type, payload } = action;

  let update_combat_stats = (mob) => {
    mob.strength = mob.strength || _.random(mob.stats.str[0], mob.stats.str[1]);
    mob.intelligence = mob.intelligence || _.random(mob.stats.int[0], mob.stats.int[1]);
    mob.dexterity = mob.dexterity || _.random(mob.stats.dex[0], mob.stats.dex[1]);
    mob.maxhp = mob.maxhp || _.random(mob.stats.hp[0], mob.stats.hp[1]);

    if (typeof mob.skills.wrestling === 'object') {
      mob.skills.wrestling = _.random(mob.skills.wrestling[0], mob.skills.wrestling[1]);
      mob.skills.tactics = _.random(mob.skills.tactics[0], mob.skills.tactics[1]);
      mob.skills.magic_resistance = _.random(mob.skills.magic_resistance[0], mob.skills.magic_resistance[1]);
    }

    mob.hp = mob.hp || mob.maxhp;
    mob.mp = mob.mp || mob.intelligence;
    mob.stamina = mob.stamina || mob.dexterity;

    // let speed = ((mob.offense.speed * 4  - Math.floor(mob.stamina / 30)) / 4).toFixed(2);
    // mob.offense.speed = parseFloat((speed < 1.25) ? 1.25 : speed);
    if (!_.isUndefined(state.Mobs.combat) && state.Mobs.combat.key === mob.key) {
      state.Mobs.combat = { ...mob };
    }
  };

  let mob_tick = (mob) => {
    if (mob.hp && mob.hp !== mob.maxhp && mob.hp > 0) {
      mob.partialhp = mob.partialhp || 0;
      mob.partialhp += 0.1;

      if (mob.partialhp % 1 === 0) {
        mob.hp++;
        mob.partialhp = 0;
      }
    }

    if (mob.stamina && mob.stamina !== mob.maxstamina && mob.hp > 0) {
      mob.partialstamina = mob.partialstamina || 0;
      mob.partialstamina += 0.2;

      if (mob.partialstamina % 1 === 0) {
        mob.stamina++;
        mob.partialstamina = 0;
      }
    }
  };

  switch (type) {
    case MOBS.UPDATE:
      state.Mobs.combat = { ...payload };
      state.Mobs.list[payload.key] = { ...state.Mobs.combat };

      // Possibly use update_combat_stats() for effects

      if (state.Mobs.combat.hp <= 0) {
        delete state.Mobs.list[payload.key];
        state.Planet.locations.splice(
          _.findIndex(state.Planet.locations, { key: payload.key }), 1
        );
      }
    break;
    case MOBS.SHOW_ACTION:
      state.Mobs.showAction = !state.Mobs.showAction;

      if (!state.Mobs.showAction) {
        state.Mobs.showCombat = false;
      }
    break;
    case MOBS.SHOW_COMBAT:
      state.Mobs.showCombat = !state.Mobs.showCombat;
    break;
    case MOBS.CREATE:
      state.Mobs.list[payload.mob.key] = payload.mob;
      update_combat_stats(payload.mob);
    break;
    case MOBS.CLEAR_COMBAT:
      // Potentially use this for corpses.
      let old_combat = {
        key: state.Mobs.combat.key,
        x: state.Mobs.combat.x,
        y: state.Mobs.combat.y,
        timer: 5
      };

      state.Mobs.recent_combat.push(old_combat);

      state.Mobs.combat = undefined;
    break;
    case MOBS.CLEAR_TIMER:
      state.Mobs.recent_combat.splice(_.findIndex(state.Mobs.recent_combat, { key: payload.key }), 1);
    break;
    case MOBS.IN_COMBAT:
      state.Mobs.combat = payload.data;
      // move setting of hp/stamina here
      update_combat_stats(payload.data);
    break;
    case MOBS.TICK:
      _.each(state.Mobs.list, (mob) => {
        mob_tick(mob);
      });

      if (state.Mobs.combat) {
        mob_tick(state.Mobs.combat);
      }

      _.each(state.Mobs.recent_combat, (mob) => {
        mob.timer--;

        if (mob.timer <= 0) {
          state.Queue.add('actions', Config.ACTIONS.MOBS.CLEAR_TIMER, { key: mob.key });
        }
      });
    break;
  }

  return state.Mobs;
}

export default Mobs;
