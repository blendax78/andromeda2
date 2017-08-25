import Config from '../components/Config';
let MESSAGES = Config.ACTIONS.MESSAGES;

const Messages = (state = {}, action) => {
  state.Messages = state.Messages || {
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

    if (state.Messages.messages.length > 49) {
      state.Messages.messages.pop();
    }

    state.Messages.messages.unshift(newMessage);
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
      // ES6 String interpolation (note the back ticks)
      payload.body = `<${payload.speaker}> ${payload.body}`;
      payload.color = 'green';
      add(payload);
    break;
    case MESSAGES.GAIN:
      payload.color = '#4169E1';
      add(payload);
    break;
    case MESSAGES.REMOVE:
      console.log('remove ' + payload.id);
    break;
  }

  return state.Messages;
}

export default Messages;
