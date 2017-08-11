import Config from '../components/Config';
let MAP = Config.ACTIONS.MAP;

const Map = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAP.EAST:
      console.log(MAP.EAST);
    break;
    case MAP.WEST:
      console.log(MAP.WEST);
    break;
    case MAP.NORTH:
      console.log(MAP.NORTH);
    break;
    case MAP.SOUTH:
      console.log(MAP.SOUTH);
    break;
  }

  return state;
}

export default Map;
