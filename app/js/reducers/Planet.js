import Config from '../components/Config';
import { PlanetData } from '../data/PlanetData';
import { DecorationData } from '../data/DecorationData';
import { MobData } from '../data/MobData';
import { ZoneData } from '../data/ZoneData';
import { TownData } from '../data/TownData';
import { StoreData } from '../data/StoreData';

let PLANET = Config.ACTIONS.PLANET;

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state.Planet = state.Planet || {
    locations: [],
    defaultZone: {
      description: ''
    },
    towns: [],
    zones: []
  };

  switch (type) {
    case PLANET.GET:
      let found_planet = _.findWhere(PlanetData, { id: payload.id });
      state.Planet = { ...state.Planet, ...found_planet };

      // ._extend() updates the first object
      _.each(state.Planet.zones, (zone) => {
        _.extend(zone, _.findWhere(ZoneData, { id: zone.id }));
        
        _.each(zone.mobs, (mob) => {
          _.extend(mob, _.findWhere(MobData, { id: mob.id }));
        });

        _.each(zone.decorations, (decoration) => {
          _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
        });
      });

      _.each(state.Planet.towns, (town) => {
        _.extend(town, _.findWhere(TownData, { id: town.id }));

        _.each(town.stores, (store) => {
          _.extend(store, _.findWhere(StoreData, { id: store.id }));
        });

        if (town.mobs) {
          _.each(town.mobs, (mob) => {
            _.extend(mob, _.findWhere(MobData, { id: mob.id }));
          });
        }
      }); 

      state.Planet.defaultZone = _.findWhere(ZoneData, { id: state.Planet.defaultZone });

      _.each(state.Planet.defaultZone.decorations, (decoration) => {
        _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
      });

      _.each(state.Planet.defaultZone.mobs, (mob) => {
        _.extend(mob, _.findWhere(MobData, { id: mob.id }));
      });
    break;
    case PLANET.TICK:
      _.each(_.filter(state.Planet.locations, (location) => {
        return location.type === 'mob' && _.isNumber(location.timer) && !location.key;
      }), (location) => {
        location.timer--;

        if (location.timer <= 0) {
          state.Queue.add('actions', Config.ACTIONS.PLANET.CLEAR_TIMER, { x: location.x, y: location.y });
        }
      });
    break;
    case PLANET.CLEAR_TIMER:
      let index = _.findIndex(state.Planet.locations, { x: payload.x, y: payload.y, type: 'mob' });

      if (_.isNumber(index) && index > 0) {
        state.Planet.locations.splice(index, 1);
      }
    break;
  }

  return state.Planet;
}

export default Planet;
