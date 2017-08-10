let Config = {
  appName: 'Andromeda',
  ACTIONS: {
    USER: {
      GET: 'USER_GET'
    }
  },

  randomKey: (text = '') => {
    return text + new Date().getTime() + Math.round(Math.random() * 10000);
  }
}

// Remove later
window.ACTIONS = Config.ACTIONS;
export default Config;