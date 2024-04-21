import {legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer.js';

const store = createStore(rootReducer);
export default store;