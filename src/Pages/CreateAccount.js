import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser, createUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const CreateAccount = (props) =>{
     console.log("PROPS >>>",props)
     let [createAccountSuccess, setAccountSuccess] = useState(false)
    function handleClick(event){
        console.log("props > HandleCLick",props)
        props.createUser({email: props.username, password: props.password })
        props.error ? setAccountSuccess(false) : setAccountSuccess(true)
    }

    function usernamechange(event){
        props.usernameChanged(event.target.value)
    }
    
    function passwordchange(event){
        props.passwordChanged(event.target.value)
    }

    return(
       
        <section id="createAccount">
        <div className="inner">
        
            <h1>Create Account</h1>
                <div className="field half first">
                    <label for="name">Username</label>
                    <input type="text" onChange={usernamechange} name="username" id="username" />
                </div>
                <div className="field half second">
                    <label for="name">Password</label>
                    <input type="password" onChange={passwordchange} name="password" id="password" />
                </div>
                <div id="createAccountButton" className="field half first"><button onClick={handleClick} >Create Account</button></div>
                <div style={{"marginTop" : "2rem"}}><h6>{props.error}</h6></div>
        </div></section>
        
    )
}

const mapStateToProps = (state) => {
    console.log(state.authReducers)
    return {
      username: state.authReducers.username,
      password: state.authReducers.password,
      isAdmin: state.authReducers.isAdmin,
      error: state.authReducers.error,
      loading: state.authReducers.loading
    };
  };
  

export default connect(mapStateToProps, {usernameChanged, passwordChanged, loginUser, createUser}) (CreateAccount);