import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { connect } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state, action) => {
  console.log(state, action)

  switch (action) {
    case 'USER_CHOSE_ROCK':
      return state
    case 'USER_CHOSE_PAPER':
      return state
    case 'USER_CHOSE_SCISSORS':
      return state
  }
}

const initialState = {count: 0}
const store = createStore(reducer, initialState)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
