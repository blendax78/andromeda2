import React, { Component } from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import Reducers from './reducers';

let store = createStore(Reducers);

// Remove Later
window.store = store;

ReactDOM.render(<App store={store}/>, document.querySelector('#app'));
