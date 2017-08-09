const UserActions = (state = [], action) => {
  switch (action.type) {
    case 'USER_GET':
      return [
        ...state,
        {
          id: 1,
          text: 'hello',
          completed: false
        }
      ]

    default:
      return state
  }
}

export default UserActions;
