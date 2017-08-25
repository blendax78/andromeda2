import React, { Component } from 'react';
import Decoration from './Decoration';
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
    // Need to keep persistent data of objects/decorations in a Location Store
    if (!zone || !zone.decorations || zone.decorations.length === 0) {
      return [];
    }

    let maxDecorations = Math.round(Math.random() * zone.maxDecorations);
    // check for locations here
    let decorations = [];

    let locations = _.where(this.state.planet.locations, { x: this.state.player.x, y: this.state.player.y });

    if (locations && locations.length === 0) {
      // Populate an empty location so locations can be empty
      this.state.planet.locations.push({ x: this.state.player.x, y: this.state.player.y });
      let potentialDecorations = [];

      // Check the chance in this loop. currently, there is always a decoration.
      for (let i = 0; i <= maxDecorations; i++) {
        let chance = Math.round(Math.random() * 100);

        potentialDecorations = _.filter(zone.decorations, (decoration) => {
          return chance <= decoration.chance;
        });

        if (potentialDecorations.length > 0) {
          let found = _.last(potentialDecorations);
          decorations.push(found);

          this.state.planet.locations.push(_.extend({ type: 'decoration' }, found, { x: this.state.player.x, y: this.state.player.y }));
        }
      }
    } else {
      decorations = locations;
    }

    return this.getDecorationResults(decorations);
  }

  getDecorationResults(decorations) {
    if (decorations.length > 0) {
      return _.map(decorations, (decoration) => {
        return <Decoration key={Config.randomKey('decoration')} data={decoration} store={this.props.store} />;
      });
    } else {
      return [];
    }
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
