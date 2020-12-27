import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Facebook from '../components/Facebook'
const Login = (props) => {

let [loginsuccess, setLoginSuccess] = useState(false)

function handleClick(e){
    console.log("props > handleClick", props)
    props.loginUser({username: props.username, password: props.password})
    setLoginSuccess(true)
}

function usernamechange(event){
    props.usernameChanged(event.target.value)
}

function passwordchange(event){
    props.passwordChanged(event.target.value)
}
console.log("RETURN >> isLoggedIn", props.isLoggedIn)
return(
    loginsuccess ? <Redirect to="/"/> :
   
<div className="inner">
    <h1>Login</h1>
        <div className="field half first">
            <label for="name">Username</label>
            <input type="text" onChange={usernamechange} name="username" id="username" />
        </div>
        <div className="field half second">
            <label for="name">Password</label>
            <input type="password" onChange={passwordchange} name="password" id="password" />
        </div>
        <div>
        <div style={{"marginTop" : "1rem"}} className="field half first"><a href="/CreateAccount" className="button alt">Creer un compte</a></div>
        <div style={{"marginTop" : "1rem"}} className="field half second"><button onClick={(e)=>{handleClick(e)}} >Connexion</button> </div>
        <div style={{"marginTop" : "1rem"}}><h6>Ou</h6></div>
        <div style={{"marginTop" : "1rem"}}><Facebook /></div>
        </div>
        <div><p>{props.error ? props.error : null}</p></div>

</div>)


}

const mapStateToProps = (state) => {
    console.log(state.authReducers)
    return {
      username: state.authReducers.username,
      password: state.authReducers.password,
      isAdmin: state.authReducers.isAdmin,
      error: state.authReducers.error,
      loading: state.authReducers.loading,
      isLoggedIn: state.authReducers.isLoggedIn
    };
  };
  

export default connect(mapStateToProps, {usernameChanged, passwordChanged, loginUser})(Login)