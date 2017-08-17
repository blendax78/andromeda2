import { combineReducers } from 'redux';
import User from './User';
import Player from './Player';
import Messages from './Messages';
import Planet from './Planet';

const Reducers = combineReducers({
  User,
  Player,
  Messages,
  Planet
});

export default Reducers;