import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Config from './Config';

class App extends Component {
  constructor(props) {
    super(props);

    this.Config = new Config();
    this.appName = this.Config.appName;
  }

  render() {
    return (
      <div>
        <Navbar name={this.appName}/>
        <div id="main-content">Welcome to React!</div>
      </div>
    )
  }
}

export default App;