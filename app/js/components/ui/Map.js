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

  getLandscape() {
    console.log(this.state.planet.landscapes);
    // if (this.state.planet.landscapes.length > 1) {
      // Randomly select.
      return _.sample(this.state.planet.landscapes);
    // } else {
      // return this.state.planet.landscapes[0];
    // }
  }

  render() {
    let planet = this.state.planet;
    let landscape = this.getLandscape();

    return (
        <div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 bold">
              {planet.current.name}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {landscape.description}
            </div>
          </div>
        </div>

    );
  }

}

export default Map;
