import { combineReducers } from 'redux';
import User from './User';
import Player from './Player';
import Messages from './Messages';
import Map from './Map';
import Planet from './Planet';

const Reducers = combineReducers({
  User,
  Player,
  Messages,
  Map,
  Planet
});

export default Reducers;