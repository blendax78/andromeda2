import React, { Component } from 'react';
import Navbar from './navbar/Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div id="main-content">Welcome to React!</div>
      </div>
    )
  }
}

export default App;