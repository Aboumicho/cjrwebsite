const INITIAL_STATE = {
    appID: "710388489613210",

}

export default (state=INITIAL_STATE, action) => {
    switch(action){
        case "GET_FACEBOOK_ID":
            return{
                ...state,
                appID: state.appID
            }
        default:
            return{
                ...state
            }
    }

}