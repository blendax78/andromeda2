import Config from '../components/Config';
import { PlanetData } from '../components/data/PlanetData';
import { LandscapeData } from '../components/data/LandscapeData';

let PLANET = Config.ACTIONS.PLANET;

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state = { current: {}, locations: [], landscapes: []};

  switch (type) {
    case PLANET.GET:
      state.current = _.findWhere(PlanetData, { id: payload.id });
      state.landscapes = _.findWhere(LandscapeData, { id: 2});
    break;
  }

  return state;
}

export default Planet;
