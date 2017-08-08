class Config {
  // Consider passing this into the store
  constructor() {
    this.appName = 'Andromeda';
  }

  randomKey(text = '') {
    return text + new Date().getTime() + Math.round(Math.random() * 10000);
  }
}

export default Config;