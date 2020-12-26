const INITIAL_STATE = { 
    username: '', 
    password: '', 
    isAdmin: false,
    user: null,
    error: null,
    loading: false,
    isLoggedIn: false
};

export default (state=INITIAL_STATE, action) => {
        console.log("ACTION >> ", action)
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
            console.log("PAYLOAD >>> LOGIN_USER", action)
            return{
                ...state,
                loading: true,
                password: '',
                error: null,
            };
        case 'GET_USER':
            return{
                ...state
            };
        case "REGISTER_FAILURE":
            return{
                ...state,
                error: action.payload.message
            }

        case "LOGIN_USER_FAIL":
            return{
                ...state,
                error: action.payload.err,
                isLoggedIn: false
            }
        case 'LOGIN_USER_SUCCESS':
            console.log("LOGIN_USER_SUCCESS > ACTION" ,action)
            return{
                ...state,
                isLoggedIn: true,
                username: action.payload.email,
                error: null

            };
        default: return state
    }
}