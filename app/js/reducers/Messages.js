import Config from '../components/Config';
let MESSAGES = Config.ACTIONS.MESSAGES;

const Messages = (state = {}, action) => {
  state = (state.messages) ? state : {
    messages: []
  };

  const { type, payload } = action;

  switch (type) {
    case MESSAGES.ADD:
      let newMessage = {
        id: Config.randomKey('msg'),
        created: new Date().toLocaleString().replace(',', ''),
        body: payload.body,
        color: (payload.color) ? payload.color : ''
      };

      if (state.messages.length > 49) {
        state.messages.pop();
      }

      state.messages.unshift(newMessage);
    break;
    case MESSAGES.REMOVE:
      console.log('remove ' + payload.id);
    break;
  }

  return state;
}

export default Messages;
