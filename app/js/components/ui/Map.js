import React, { Component } from 'react';
import Config from '../Config';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: props.store.getState().Planet
    };

    props.store.subscribe(() => {
      this.setState({
        planet: this.props.store.getState().Planet
      });
    });
  }

  get_current_planet() {
    let planet_id = this.props.store.getState().Player.planet_id;

    this.props.store.dispatch({ type: Config.ACTIONS.PLANET.GET, payload: { id: planet_id }});
  }

  componentDidMount() {
    this.get_current_planet();
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
