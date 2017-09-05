import Config from '../components/Config';
import { PlanetData } from '../data/PlanetData';
import { DecorationData } from '../data/DecorationData';
import { MobData } from '../data/MobData';
import { ZoneData } from '../data/ZoneData';

let PLANET = Config.ACTIONS.PLANET;

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state.Planet = state.Planet || {
    current: {},
    locations: [],
    defaultZone: {
      description: ''
    }
  };

  switch (type) {
    case PLANET.GET:
      state.Planet.current = _.findWhere(PlanetData, { id: payload.id });

      // ._extend() updates the first object
      _.each(state.Planet.current.zones, (zone) => {
        _.extend(zone, _.findWhere(ZoneData, { id: zone.id }));
        
        _.each(zone.mobs, (mob) => {
          _.extend(mob, _.findWhere(MobData, { id: mob.id }));
        });

        _.each(zone.decorations, (decoration) => {
          _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
        });
      });

      state.Planet.defaultZone = _.findWhere(ZoneData, { id: state.Planet.current.defaultZone });

      _.each(state.Planet.defaultZone.decorations, (decoration) => {
        _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
      });

      _.each(state.Planet.defaultZone.mobs, (mob) => {
        _.extend(mob, _.findWhere(MobData, { id: mob.id }));
      });
    break;
  }

  return state.Planet;
}

export default Planet;
