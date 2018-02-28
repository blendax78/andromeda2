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
    mob.hp = mob.hp || mob.maxhp;
    mob.mp = mob.mp || mob.intelligence;
    mob.stamina = mob.stamina || mob.dexterity;

    let speed = ((mob.offense.speed * 4  - Math.floor(mob.stamina / 30)) / 4).toFixed(2);
    mob.offense.speed = parseFloat((speed < 1.25) ? 1.25 : speed);

    state.Mobs.combat = { ...mob };
  };

  switch (type) {
    case MOBS.UPDATE:
      state.Mobs.combat = { ...payload };
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
