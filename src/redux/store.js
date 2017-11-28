import {
  createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { platformMap } from './store'
import createDebounce from 'redux-debounce'

