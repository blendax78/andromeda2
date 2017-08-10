import Config from '../components/Config';
let USER = Config.ACTIONS.USER;

const User = (state = {}, action) => {
  state = (state.id) ? state : {
    id: 1,
    name: 'empty',
    user_name: 'blendax78',
    token: '',
  };

  switch (action.type) {
    case USER.GET:
      state.user_name = 'hi';
      // Do nothing
    break;
  }

  return state;
}

export default User;
