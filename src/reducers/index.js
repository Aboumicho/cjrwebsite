import AuthReducers from './AuthReducer'
import CommentsReducers from './CommentsReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    authReducers: AuthReducers,
    commentsReducers: CommentsReducers
})