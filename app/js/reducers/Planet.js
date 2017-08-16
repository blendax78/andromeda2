import Config from '../components/Config';
import { PlanetData } from '../components/data/PlanetData';
import { LandscapeData } from '../components/data/LandscapeData';

let PLANET = Config.ACTIONS.PLANET;

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state = (state.current) ? state : {
    current: {},
    locations: [],
    landscapes: [ { description: '' } ]
  };

  switch (type) {
    case PLANET.GET:
      state.current = _.findWhere(PlanetData, { id: payload.id });
      state.landscapes = _.filter(LandscapeData, function(landscape) {
        return _.contains(state.current.landscapes, landscape.id);
      });
    break;
  }

  return state;
}

export default Planet;
