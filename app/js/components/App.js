import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Config from './Config';
import UI from './ui/UI';

class App extends Component {
  constructor(props) {
    super(props);

    this.appName = Config.appName;
    // Cause redux store & state update
    this.state = {
      User: props.store.getState().User
    };

    props.store.subscribe(() => {
      this.setState({});
    });
  }


  render() {
    return (
      <div>
        <Navbar name={this.appName} store={this.props.store} />
        <div id="main-content" className="row">
          <UI store={this.props.store} />
        </div>
      </div>
    )
  }
}

export default App;