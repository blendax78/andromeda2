import Config from '../components/Config';
let MOBS = Config.ACTIONS.MOBS;

const Mobs = (state = {}, action) => {
  state.Mobs = state.Mobs || {
    list: {},
    action: {}
  };

  const { type, payload } = action;

  switch (type) {
    case MOBS.GET:
      // Do nothing
    break;
    case MOBS.CREATE:
      state.Mobs.list[payload.mob.key] = payload.mob;
    break;
  }

  return state.Mobs;
}

export default Mobs;
