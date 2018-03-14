import Config from '../components/Config';
let QUEUE = Config.ACTIONS.QUEUE;

// Handles messaging queues.
// Add new array for a different queue
const Queue = (state = {}, action) => {
  state.Queue = state.Queue || {
    actions: [],
    add: (queue, action, message) => {
      state.Queue[queue].push({ action: action, payload: message })
    },
    remove: (queue) => {
      return state.Queue[queue].shift()
    }
  };

  const { type, payload } = action;

  switch (type) {
    case QUEUE.ADD:
      // Probably won't be used
      state.Queue[payload.queue].push(payload.message);
    break;
    case QUEUE.REMOVE:
    break;
  }

  return state.Queue;
}

export default Queue;
