import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import Auth from './Auth';
import Notifications from './Notifications';
import install from './install';

const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth: Auth,
  notifications: Notifications,
  install,
});

export default reducers;
