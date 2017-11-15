import React, { Component } from 'react';
import Decoration from './Decoration';
import Town from './Town';
import Mob from './Mob';
import Config from '../Config';

class Map extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      town: Config.randomKey('town')
    };

    this.state = {
      planet: props.store.getState().Planet,
      player: props.store.getState().Player,
      mobs: props.store.getState().Mobs,
      town: false
    };

    props.store.subscribe(() => {
      this.setState({
        planet: this.props.store.getState().Planet,
        player: this.props.store.getState().Player,
        mobs: this.props.store.getState().Mobs
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.props.store.unsubscribe();
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
    _.each(this.state.planet.zones, function(possibleZone) {
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

    this.state.town = false;
    let maxDecorations = Math.round(Math.random() * zone.maxDecorations);
    // check for locations here
    let decorations = [];

    let town = _.findWhere(this.state.planet.towns, { x: this.state.player.x, y: this.state.player.y });

    if (!town) {
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
    } else {
      decorations = [ { ...town, type: 'town' } ];
    }

    return this.getDecorationResults(decorations);
  }

  getDecorationResults(decorations) {
    if (decorations.length > 0) {
      return _.map(decorations, (decoration) => {
        // type isn't set if the room contains an empty location record.
        switch (decoration.type) {
          case 'decoration':
            if (decoration.key) {
              return <Decoration key={decoration.key} data={decoration} store={this.props.store} />;    
            }
          break;
          case 'town':
            return <Town key={this.keys.town} data={decoration} store={this.props.store} />
          break;
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

          found.hp = found.maxhp;

          this.state.planet.locations.push({ x: found.x, y: found.y, type: found.type, key: found.key });

          found.hp = found.maxhp;
          mobs.push(found);

          Config.dispatch(this.props.store, Config.ACTIONS.MOBS.CREATE, { mob: found });

        }
      }
    } else {
      // go through locations and get state.mobs by key
      mobs = _.map(locations, (location) => {
        if (location.key && this.state.mobs.list[location.key]) {
          return this.state.mobs.list[location.key];
        } else {
          return location;
        }
      });
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
    let mobs = (!this.state.town) ? this.getMobs(zone) : '';

    return (
        <div>
          <div className="row">
            <h5 className="col-lg-4 col-md-4 col-sm-4 bold">
              {planet.name}
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
