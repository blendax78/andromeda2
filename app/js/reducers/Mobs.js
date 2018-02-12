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

  switch (type) {
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
      let mob = payload.data;
      mob.hp = 
      state.Mobs.combat = {
        hp: mob.hp || mob.maxhp,
        mp: mob.mp || mob.intelligence,
        stamina: mob.stamina || mob.dexterity,
        ...payload.data
      };
    break;
  }

  return state.Mobs;
}

export default Mobs;
