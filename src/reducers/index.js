import { combineReducers } from 'redux';
import post from './memeReducer';
import get from './memeGetReducer';

export default combineReducers({
  post,
  get
});
