import Config from '../components/Config';
let MOBS = Config.ACTIONS.MOBS;

const Mobs = (state = {}, action) => {
  state.Mobs = state.Mobs || {
    id: 1,
    name: 'empty',
    user_name: 'test user',
    token: ''
  };

  const { type, payload } = action;

  switch (type) {
    case MOBS.GET:
      // Do nothing
    break;
  }

  return state.Mobs;
}

export default Mobs;
