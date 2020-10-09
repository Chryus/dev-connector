import { combineReducers } from 'redux';
import alert from './alert';
import register from './auth';
import auth from './auth';

export default combineReducers({
  alert,
  auth,
  register
});
