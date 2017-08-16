import React, { Component } from 'react';
import Config from '../Config';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: props.store.getState().Planet,
      player: props.store.getState().Player
    };

    props.store.subscribe(() => {
      this.setState({
        planet: this.props.store.getState().Planet,
        player: this.props.store.getState().Player
      });
    });
  }

  componentDidMount() {
    this.props.store.dispatch({
      type: Config.ACTIONS.PLANET.GET,
      payload: {
        id: this.state.player.planet_id
      }
    });
  }

  render() {
    let planet = this.state.planet;

    return (
        <div className="">
          {planet.current.description}
        </div>

    );
  }

}

export default Map;
