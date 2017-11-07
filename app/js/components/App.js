import React, { Component } from 'react';
import Navbar from './ui/navbar';
import Modal from './ui/modals/';
import Config from './Config';
import UI from './ui/UI';

class App extends Component {
  constructor(props) {
    super(props);

    // Cause redux store & state update
    this.state = {
      appName: Config.APPNAME,
      user: props.store.getState().User,
      player: props.store.getState().Player
    };

    props.store.subscribe(() => {
      this.setState({
        appName: Config.APPNAME,
        user: props.store.getState().User,
        player: props.store.getState().Player
      });
    });
  }

  getInitialState() {
    // nothing
  }

  componentWillMount() {
    // Fetch user data. This will start a cascade of player & inventory fetching
    this.props.store.dispatch({
      type: Config.ACTIONS.USER.FETCH,
      payload: { id: 1 }
    });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Modal store={this.props.store} />
        <Navbar name={this.state.appName} store={this.props.store} />
        <div id="main-content" className="">
          <UI store={this.props.store} />
        </div>
      </div>
    )
  }
}

export default App;
