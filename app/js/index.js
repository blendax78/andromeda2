import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import Config from './components/Config';
import App from './components/App';
import Reducers from './reducers';

import {BankService, InventoryService, PlayerService, SkillService, UserService} from './services';

import { ItemData } from './data/ItemData';
import { MobData } from './data/MobData';


const services = [
  BankService,
  InventoryService,
  PlayerService,
  SkillService,
  UserService
];

let store = createStore(Reducers, {}, applyMiddleware(...services));

if (Config.ENV === 'dev') {
  window.store = store;
  window.Config = Config;
  window.ItemData = ItemData;
  window.MobData = MobData;
}

ReactDOM.render(<App store={store}/>, document.querySelector('#app'));
