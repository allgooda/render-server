// start up point for the client side app
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const middleware = applyMiddleware(thunk.withExtraArgument(axiosInstance), createLogger());

const store = createStore(reducers, window.INITIAL_STATE, middleware);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div> {renderRoutes(Routes)} </div>
    </BrowserRouter>
  </Provider>, 
  document.querySelector('#root')
);
