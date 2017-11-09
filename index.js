import { AppRegistry } from 'react-native';
import App from './App';
import RootReducer from './src/services/rootreducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';


import React, { Component } from 'react';

export const store = createStore(
  RootReducer,
  undefined,
  // the ordering of middleware is significant.
  applyMiddleware(thunk),
);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


AppRegistry.registerComponent('TestProject', () => ReduxApp);