import Config from '../components/Config';
let MESSAGES = Config.ACTIONS.MESSAGES;

const Messages = (state = {}, action) => {
  state.Messages = state.Messages || [];

  const { type, payload } = action;

  let add = (payload) => {
    let newMessage = {
      id: Config.randomKey('msg'),
      created: new Date().toLocaleString().replace(',', ''),
      body: payload.body,
      color: (payload.color) ? payload.color : ''
    };

    if (state.Messages.length > 49) {
      state.Messages.pop();
    }

    state.Messages.unshift(newMessage);
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
    case MESSAGES.SUCCESS:
      payload.color = 'green';
      add(payload);
    break;
    case MESSAGES.WARNING:
      payload.color = '#FF8C00';
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
