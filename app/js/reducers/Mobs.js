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
      console.log(state.Mobs);
    break;
    case MOBS.SHOW_COMBAT:
      state.Mobs.showCombat = !state.Mobs.showCombat;
      console.log(state.Mobs);
    break;
    case MOBS.CREATE:
      state.Mobs.list[payload.mob.key] = payload.mob;
    break;
    case MOBS.CLEAR_COMBAT:
      state.Mobs.combat = undefined;
    break;
    case MOBS.IN_COMBAT:
      state.Mobs.combat = payload.combat;
    break;
  }

  return state.Mobs;
}

export default Mobs;
