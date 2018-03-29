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

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        appName: Config.APPNAME,
        user: props.store.getState().User,
        player: props.store.getState().Player
      });
    });

    let tick_handler = () => {
      Config.dispatch(this.props.store, Config.ACTIONS.PLAYER.TICK, {});
      Config.dispatch(this.props.store, Config.ACTIONS.MOBS.TICK, {});
      Config.dispatch(this.props.store, Config.ACTIONS.PLANET.TICK, {});

      if (this.timer % 30 === 0 && this.timer !== 0) {
        if (Config.ENV === 'prod') {
          // Only if not on local.
          Config.dispatch(this.props.store, Config.ACTIONS.PLAYER.SAVE, this.props.store.getState().Player);
          Config.notifyGain(this.props.store, 'Saving Player.');
        }
      }

      this.timer++;
    };

    // Global tick handler
    this.timer = this.timer || 0;
    this.tick = this.tick || setInterval(() => {
      tick_handler();
    }, 1000);

    let queue_processor = () => {
      let queue_item = this.props.store.getState().Queue.remove('actions'); 
      if (queue_item !== undefined) {
        Config.dispatch(this.props.store, queue_item.action, queue_item.payload);
      }
    };

    this.queue = this.queue | setInterval(queue_processor, 100);
  }

  getInitialState() {
    // nothing
  }

  componentWillUnmount() {
    this.unsubscribe();
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
