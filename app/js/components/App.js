import React, { Component } from 'react';
import Navbar from './ui/navbar/Navbar';
import Modal from './ui/Modal';
import Config from './Config';
import UI from './ui/UI';

class App extends Component {
  constructor(props) {
    super(props);

    this.appName = Config.appName;
    // Cause redux store & state update
    this.state = {
      user: props.store.getState().User,
      player: props.store.getState().Player
    };

    props.store.subscribe(() => {
      this.setState({
        user: props.store.getState().User,
        player: props.store.getState().Player
      });
    });
  }

  getInitialState() {
    // nothing
  }

  componentDidMount() {
    // Attach to App object in case we need to kill it.
    // Arrow function binds 'this' to scope where it was defined.
    this.playerTick = setInterval(() => {
      this.props.store.dispatch({ type: Config.ACTIONS.PLAYER.TICK, payload: { id: this.state.player.id } });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Modal store={this.props.store} />
        <Navbar name={this.appName} store={this.props.store} />
        <div id="main-content" className="">
          <UI store={this.props.store} />
        </div>
      </div>
    )
  }
}

export default App;
