
import firebase from '../config/Firebase'

export const usernameChanged = (username) => {
    return {
      type: 'USERNAME_CHANGED',
      payload: username
    };
  };
  
  export const passwordChanged = (password) => {
    return {
      type: 'PASSWORD_CHANGED',
      payload: password
    };
  };
  
  export const loginUser = ({ username, password}) => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((user) => {
            loginUserSuccess(dispatch, user);
         })
         .catch((err) => {
            loginUserFail(dispatch, err);
         });
    };
};

const loginUserSuccess = (dispatch, user, isAdmin) => {
    
    dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: user
    });

    console.log("user >>>>",user.user.email)
    console.log("ADMIN EMSAIL" , process.env.ADMIN_EMAIL)
    // if(process.env.ADMIN_EMAIL)

    if (isAdmin) {
        console.log('User is admin');
    }
    else{
        console.log("User is not Admin")
    }

};

const loginUserFail = (dispatch, err) => {
    alert('Error! Wrong Credentials, Please Try Again!');
    dispatch({
        type: 'LOGIN_USER_FAIL',
        payload: err
    });
};

export const createUser = ({email, password}) => {

  return (dispatch) => {
    dispatch({ type: "REGISTER_USER_REQUEST" });

    let authFailure = false;

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: "REGISTER_FAILURE", payload: err })
      });
    
  };
};

export const logoutUser = () => {

  return (dispatch) =>{
    
    firebase.auth().signOut().then(()=>{
      dispatch({type: "LOGOUT_SUCCESS"})
    }).catch((err) => {
      dispatch({type: "LOGOUT_FAILURE", payload: err })
    })
  }

}
