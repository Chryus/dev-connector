import { combineReducers } from 'redux';
import alert from './alert';
import register from './auth';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
  alert,
  auth,
  register,
  profile,
  post
});
