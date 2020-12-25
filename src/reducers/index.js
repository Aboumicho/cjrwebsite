import AuthReducers from './AuthReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    authReducers: AuthReducers
})