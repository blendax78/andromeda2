import Config from '../components/Config';
let MAP = Config.ACTIONS.MAP;

// Map will most likely handle planets, dungeons, & other locations
// Dungeons might be a simple 'go deeper / go toward entrance' random interface.

const Map = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAP.EAST:
      // console.log('m', MAP.EAST);
    break;
    case MAP.WEST:
      // console.log(MAP.WEST);
    break;
    case MAP.NORTH:
      // console.log(MAP.NORTH);
    break;
    case MAP.SOUTH:
      // console.log(MAP.SOUTH);
    break;
  }

  return state;
}

export default Map;
