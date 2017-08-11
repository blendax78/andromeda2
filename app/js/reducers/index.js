import { combineReducers } from 'redux';
import User from './User';
import Player from './Player';
import Messages from './Messages';

const Reducers = combineReducers({
  User,
  Player,
  Messages
});

export default Reducers;