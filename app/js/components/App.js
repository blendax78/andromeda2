import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './navbar/Navbar';
import Config from './Config';

class App extends Component {
  constructor(props) {
    super(props);

    this.appName = Config.appName;
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