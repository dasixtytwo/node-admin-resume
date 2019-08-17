import { combineReducers } from 'redux';
import authReducer from 'reducers/authReducer';
import errorReducer from 'reducers/errorsReducer';
import profileReducer from 'reducers/profileReducer';
import postReducer from 'reducers/postReducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  errors: errorReducer,
  post: postReducer
})