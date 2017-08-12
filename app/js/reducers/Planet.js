import Config from '../components/Config';
let PLANET = Config.ACTIONS.PLANET;

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state = { current: {}, locations: [], planets: [] };

  // Probably will need to break this out into a file to import.
  let planets = [
    {
      id: 1,
      name: 'Alpha Centauri b',
      height: 2000,
      width: 2000,
      locx: 0,
      locy: 0,
      description: 'Grass everywhere'
    },
    {
      id: 2,
      name: 'Arrakis',
      height: 1200,
      width: 1200,
      locx: 25,
      locy: 38,
      description: 'Desert everywhere'
    }
  ];

  switch (type) {
    case PLANET.GET:
      state.current = _.findWhere(planets, { id: payload.id });
    break;
  }

  return state;
}

export default Planet;
