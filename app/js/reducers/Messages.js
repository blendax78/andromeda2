import Config from '../components/Config';
let MESSAGES = Config.ACTIONS.MESSAGES;

const Messages = (state = {}, action) => {
  state = (state.messages) ? state : {
    messages: []
  };

  const { type, payload } = action;

  let add = (payload) => {
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
  };

  switch (type) {
    case MESSAGES.ERROR:
      payload.color = 'red';
      add(payload);
    break;
    case MESSAGES.ADD:
      add(payload);
    break;
    case MESSAGES.SPEAK:
      payload.body = `<${payload.speaker}> ${payload.body}`;
      payload.color = 'green';
      add(payload);
    break;
    case MESSAGES.REMOVE:
      console.log('remove ' + payload.id);
    break;
  }

  return state;
}

export default Messages;
