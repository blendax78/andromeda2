import React, { Component } from 'react';
import Decoration from './Decoration';
import Mob from './Mob';
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

    let locations = _.where(this.state.planet.locations, {
      x: this.state.player.x,
      y: this.state.player.y
    });

    if (locations && locations.length === 0) {
      let potentialDecorations = [];

      // Check the chance in this loop.
      for (let i = 0; i <= maxDecorations; i++) {
        let chance = Math.round(Math.random() * 100);

        potentialDecorations = _.filter(zone.decorations, (decoration) => {
          return chance <= decoration.chance;
        });

        if (potentialDecorations.length > 0) {
          // Extends decoration object by value, not reference
          let found = $.extend(true, {
            key: Config.randomKey('decoration'),
            type: 'decoration',
            x: this.state.player.x,
            y: this.state.player.y
          }, _.last(potentialDecorations));

          decorations.push(found);

          this.state.planet.locations.push(found);
        }
      }
    } else {
      decorations = locations;
    }

    if (decorations.length === 0) {
      // Still empty
      // Populate an empty location so locations can be empty
      this.state.planet.locations.push({ x: this.state.player.x, y: this.state.player.y, type: 'decoration' });
    }

    return this.getDecorationResults(decorations);
  }

  getDecorationResults(decorations) {
    if (decorations.length > 0) {
      return _.map(decorations, (decoration) => {
        // type isn't set if the room contains an empty location record.
        if (decoration.type === 'decoration' && decoration.key) {
          return <Decoration key={decoration.key} data={decoration} store={this.props.store} />;
        }
      });
    } else {
      return [];
    }
  }

  getMobs(zone) {
    // Need to keep persistent data of objects/decorations in a Location Store
    if (!zone || !zone.mobs || zone.mobs.length === 0) {
      return [];
    }

    let maxMobs = 1; // Can mobs travel in packs?
    // check for locations here
    let mobs = [];

    let locations = _.where(this.state.planet.locations, {
      x: this.state.player.x,
      y: this.state.player.y,
      // If rooms are always empty, remove the next line
      type: 'mob'
    });

    if (locations && locations.length === 0) {
      let potentialMobs = [];

      // Check the chance in this loop.
      for (let i = 1; i <= maxMobs; i++) {
        let chance = Math.round(Math.random() * 100);

        potentialMobs = _.filter(zone.mobs, (mob) => {
          return chance <= mob.chance;
        });

        if (potentialMobs.length > 0) {
          // Extends decoration object by value, not reference
          let found = $.extend(true, {
            key: Config.randomKey('mob'),
            type: 'mob',
            x: this.state.player.x,
            y: this.state.player.y
          }, _.last(potentialMobs));

          mobs.push(found);

          this.state.planet.locations.push(found);
        }
      }
    } else {
      mobs = locations;
    }

    if (mobs.length === 0) {
      // Still empty
      // Populate an empty location so locations can be empty
      this.state.planet.locations.push({ x: this.state.player.x, y: this.state.player.y, type: 'mob' });
    }

    return this.getMobResults(mobs);
  }

  getMobResults(mobs) {
    if (mobs.length > 0) {
      return _.map(mobs, (mob) => {
        // type isn't set if the room contains an empty location record.
        if (mob.type === 'mob' && mob.key) {
          return <Mob key={mob.key} data={mob} store={this.props.store} />;
        }
      });
    } else {
      return [];
    }
  }

  render() {
    let planet = this.state.planet;
    let zone = this.getZone();
    let decorations = this.getDecorations(zone);
    let mobs = this.getMobs(zone);

    return (
        <div>
          <div className="row">
            <h5 className="col-lg-4 col-md-4 col-sm-4 bold">
              {planet.current.name}
            </h5>
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
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {mobs}
            </div>
          </div>
        </div>

    );
  }

}

export default Map;
