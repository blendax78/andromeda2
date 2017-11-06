import Config from '../components/Config';
let USER = Config.ACTIONS.USER;

const User = (state = {}, action) => {
  state.User = state.User || {
    id: 1,
    name: 'test user',
    token: ''
  };

  const { type, payload } = action;

  switch (type) {
    case USER.GET:
      state.User = {...state.User, ...payload};
    break;
  }

  return state.User;
}

export default User;
