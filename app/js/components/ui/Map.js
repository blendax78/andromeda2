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

  getZone() {
    let zone = this.state.planet.defaultZone;
    let player = this.state.player;
    _.each(this.state.planet.current.zones, function(possibleZone) {
      if ( player.x >= possibleZone.zoneMinX && player.x <= possibleZone.zoneMaxX && 
        player.y >= possibleZone.zoneMinY && player.y <= possibleZone.zoneMaxY ) {
        zone = possibleZone;
      }
    });

    return zone;
  }

  getDecorations(zone) {
    if (!zone || !zone.decorations || zone.decorations.length === 0) {
      return '';
    }

    let chance = Math.round(Math.random() * 100);

    let decorations = _.filter(zone.decorations, (decoration) => {
      // Might have to rethink this. This means that certain things will ALWAYS appear with more common items
      return chance <= decoration.chance;
    });

    let results = '';
    if (decorations.length > 0) {
      results = _.map(decorations, (decoration) => {
        return <p key={Config.randomKey('decoration')}><a href="#">{decoration.description}</a></p>
      });
    }

    return results;
  }

  render() {
    let planet = this.state.planet;
    let zone = this.getZone();
    let decorations = this.getDecorations(zone);

    return (
        <div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 bold">
              {planet.current.name}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {zone.description}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {decorations}
            </div>
          </div>
        </div>

    );
  }

}

export default Map;
