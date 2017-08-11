import { combineReducers } from 'redux';
import User from './User';
import Player from './Player';
import Messages from './Messages';
import Map from './Map';

const Reducers = combineReducers({
  User,
  Player,
  Messages,
  Map
});

export default Reducers;