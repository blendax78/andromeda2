import Config from '../components/Config';
let USER = Config.ACTIONS.USER;

const User = (state = {}, action) => {
  state.User = state.User || {
    id: 1,
    name: 'empty',
    user_name: 'blendax78',
    token: ''
  };

  const { type, payload } = action;

  switch (type) {
    case USER.GET:
      state.User.user_name = 'hi';
      state.Player.name ='ho';
      // Do nothing
    break;
  }

  return state.User;
}

export default User;
