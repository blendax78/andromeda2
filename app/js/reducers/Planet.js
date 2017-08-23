import Config from '../components/Config';
import { PlanetData } from '../components/data/PlanetData';
import { DecorationData } from '../components/data/DecorationData';
import { ZoneData } from '../components/data/ZoneData';

let PLANET = Config.ACTIONS.PLANET;

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state = (state.current) ? state : {
    current: {},
    locations: [],
    defaultZone: { description: '' }
  };

  switch (type) {
    case PLANET.GET:
      state.current = _.findWhere(PlanetData, { id: payload.id });

      // ._extend() updates the first object
      _.each(state.current.zones, (zone) => {
        _.extend(zone, _.findWhere(ZoneData, { id: zone.id }));
        
        _.each(zone.decorations, (decoration) => {
          _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
        });
      });

      state.defaultZone = _.findWhere(ZoneData, { id: state.current.defaultZone });
      _.each(state.defaultZone.decorations, (decoration) => {
        _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
      });
    break;
  }

  return state;
}

export default Planet;
