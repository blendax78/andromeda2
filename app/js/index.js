import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import Config from './components/Config';
import App from './components/App';
import Reducers from './reducers';
import AndromedaService from './services/AndromedaService';

let store = createStore(Reducers, {}, applyMiddleware(AndromedaService));

if (Config.ENV === 'dev') {
  window.store = store;
  window.Config = Config;
}

ReactDOM.render(<App store={store}/>, document.querySelector('#app'));
