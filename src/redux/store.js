import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import localStorageMiddleware from './localStorageMiddleware';
import { getInitialState } from './localStorageActions';
import rootReducer from './rootReducer.js';

const initialAppState = getInitialState();

const store = createStore(
  rootReducer,
  initialAppState,
  applyMiddleware(localStorageMiddleware)
);

export default store;
