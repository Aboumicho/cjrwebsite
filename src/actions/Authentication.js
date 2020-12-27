
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

export const setUser = (user) =>{
  return(dispatch) => {
    dispatch({type: "SET_USER", payload: user})
  }
}

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
      
      console.log("")
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(u=>{})
        .catch(error => {
          switch(error.code){
            case 'auth/email-already-in-use':
            dispatch({type: "REGISTER_FAILURE_EMAIL_IN_USE", payload:`Email ${email} déjà utilisé` })
            
          break;
        case 'auth/invalid-email':
          console.log(`Email address ${email} is invalid.`);
          dispatch({type: "REGISTER_FAILURE_EMAIL_IN_USE", payload:`Email invalide: ${email}` })
          break;
        case 'auth/operation-not-allowed':
          dispatch({type: "REGISTER_FAILURE_EMAIL_IN_USE", payload:`Une erreur est survenue durant la connexion. Veuillez réessayer.` })
          console.log(`Error during sign up.`);
          break;
        case 'auth/weak-password':
          dispatch({type: "REGISTER_FAILURE_EMAIL_IN_USE", payload:`Mot de passe invalide. Veuillez rajoutez des chiffres (1, 2, 3, ...) et charactères spéciaux (! , £, *, ... )` })
          console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
          break;
        default:
          console.log(error.code);
          break;
          }
        })
      // .then(() => {
      //   dispatch({ type: "REGISTER_SUCCESS" })
      // })
      // .catch((err) => {
      //   console.log(err)
      //   dispatch({ type: "REGISTER_FAILURE", payload: err })
      // });
    
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
