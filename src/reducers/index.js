import AuthReducers from './AuthReducer'
import CommentsReducers from './CommentsReducer'
import { combineReducers } from 'redux';
import FacebookReduer from './FacebookReduer';

export default combineReducers({
    authReducers: AuthReducers,
    commentsReducers: CommentsReducers,
    facebookReducers: FacebookReduer
})