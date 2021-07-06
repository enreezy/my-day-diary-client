import { combineReducers } from 'redux';
import diaryReducer from './diaryReducer';
import authReducer from './authReducer';

export default combineReducers({
    diary: diaryReducer,
    auth: authReducer
});