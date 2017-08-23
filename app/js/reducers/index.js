import { combineReducers } from 'redux';
import User from './User';
import Player from './Player';
import Messages from './Messages';
import Planet from './Planet';
import Inventory from './Inventory';

const Reducers = combineReducers({
  User,
  Player,
  Messages,
  Planet,
  Inventory
});

export default Reducers;