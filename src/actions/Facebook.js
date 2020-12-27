
export const getFacebookID = () =>{
    return(dispatch) => {
        dispatch({type: "GET_FACEBOOK_ID"})
    }
}