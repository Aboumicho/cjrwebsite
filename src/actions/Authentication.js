
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
        //set loading spinner along with the firebase call
        dispatch({ type: 'LOGIN_USER' });

        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((user) => {
            loginUserSuccess(dispatch, user);
         })
         .catch(() => {
            loginUserFail(dispatch);
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

const loginUserFail = (dispatch) => {
    alert('Error! Wrong Credentials, Please Try Again!');
    dispatch({
        type: 'LOGIN_USER_FAIL'
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
        dispatch({ type: "REGISTER_FAILURE" })
      });
    
  };
};
