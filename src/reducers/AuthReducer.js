const INITIAL_STATE = { 
    username: '', 
    password: '', 
    isAdmin: false,
    user: null,
    error: '',
    loading: false,
    isLoggedIn: false
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'USERNAME_CHANGED':
            return {
                ...state,
                username: action.payload
            };
        case 'PASSWORD_CHANGED':
            return {
                ...state,
                password: action.payload
            };
        case 'LOGIN_USER':
            return{
                ...state,
                loading: true,
                password: '',
                error: '',
                isLoggedIn: true
            };
        case 'GET_USER':
            return{
                ...state
            };
        case 'LOGIN_FAILED':
            return{
                ...state,
                error: 'Authentication Failed',
                password: '',
                loading: false
            }
        default: return state
    }
}