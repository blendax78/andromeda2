import Config from '../components/Config';
let MOBS = Config.ACTIONS.MOBS;

const Mobs = (state = {}, action) => {
  state.Mobs = state.Mobs || {
    list: {},
    showAction: false,
    showCombat: false,
    combat: undefined
  };

  const { type, payload } = action;

  let update_combat_stats = (mob) => {
    mob.strength = mob.strength || _.random(mob.stats.str_min, mob.stats.str_max);
    mob.intelligence = mob.intelligence || _.random(mob.stats.int_min, mob.stats.int_max);
    mob.dexterity = mob.dexterity || _.random(mob.stats.dex_min, mob.stats.dex_max);
    mob.maxhp = mob.maxhp || _.random(mob.stats.hp_min, mob.stats.hp_max);

    mob.hp = mob.hp || mob.maxhp;
    mob.mp = mob.mp || mob.intelligence;
    mob.stamina = mob.stamina || mob.dexterity;

    // let speed = ((mob.offense.speed * 4  - Math.floor(mob.stamina / 30)) / 4).toFixed(2);
    // mob.offense.speed = parseFloat((speed < 1.25) ? 1.25 : speed);

    state.Mobs.combat = { ...mob };
  };

  switch (type) {
    case MOBS.UPDATE:
      state.Mobs.combat = { ...payload };
      state.Mobs.list[payload.key] = { ...state.Mobs.combat };

      // Possibly use update_combat_stats() for effects

      if (state.Mobs.combat.hp <= 0) {
        delete state.Mobs.list[payload.key];
        delete state.Planet.locations[_.findIndex(state.Planet.locations, { key: payload.key })];
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
      state.Mobs.combat = undefined;
    break;
    case MOBS.IN_COMBAT:
      state.Mobs.combat = payload.data;
      // move setting of hp/stamina here
      update_combat_stats(payload.data);
    break;
    case MOBS.TICK:
      _.each(state.Mobs.list, (mob) => {
        if (mob.hp && mob.hp !== mob.maxhp) {
          mob.partial = mob.partial || 0;
          mob.partial += 0.2;

          if (mob.partial % 1 === 0) {
            mob.hp++;
            mob.partial = 0;
          }
        }
      });
    break;
  }

  return state.Mobs;
}

export default Mobs;
