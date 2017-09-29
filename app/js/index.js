import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import Reducers from './reducers';
import AndromedaService from './services/AndromedaService';

let store = createStore(Reducers, {}, applyMiddleware(AndromedaService));

window.store = store; //remove this

ReactDOM.render(<App store={store}/>, document.querySelector('#app'));
