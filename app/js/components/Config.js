let Config = {
  appName: 'Andromeda',

  randomKey: (text = '') => {
    return text + new Date().getTime() + Math.round(Math.random() * 10000);
  }
}

export default Config;