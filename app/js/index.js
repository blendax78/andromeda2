import React, { Component } from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import Actions from './reducers';

let store = createStore(Actions);
console.log(store);
window.store = store;

ReactDOM.render(<App />, document.querySelector('#app'));
