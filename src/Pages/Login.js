import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    <section id="login">
<div class="inner">
    <h1>Login</h1>
        <div class="field half first">
            <label for="name">Username</label>
            <input type="text" onChange={usernamechange} name="username" id="username" />
        </div>
        <div class="field half second">
            <label for="name">Password</label>
            <input type="password" onChange={passwordchange} name="password" id="password" />
        </div>
        <div>
        <div className="field half first"><a href="/CreateAccount" class="button alt">Create Account</a></div>
        <div className="field half second"><button onClick={(e)=>{handleClick(e)}} >Login</button> </div>
        </div>
        <div><p>{props.error ? props.error : null}</p></div>

</div></section>)


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