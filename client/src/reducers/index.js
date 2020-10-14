import { combineReducers } from 'redux';
import alert from './alert';
import register from './auth';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  alert,
  auth,
  register,
  profile
});
