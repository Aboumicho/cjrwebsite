import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser, createUser} from '../actions/Authentication'
import { connect } from 'react-redux';

const CreateAccount = (props) =>{
     console.log("PROPS >>>",props)
    function handleClick(event){
        console.log("props > HandleCLick",props)
        props.createUser({email: props.username, password: props.password })
    }

    function usernamechange(event){
        props.usernameChanged(event.target.value)
    }
    
    function passwordchange(event){
        props.passwordChanged(event.target.value)
    }

    return(
        <section id="createAccount">
        <div class="inner">
            <h1>Create Account</h1>
            
                <div class="field half first">
                    <label for="name">Username</label>
                    <input type="text" onChange={usernamechange} name="username" id="username" />
                </div>
                <div class="field half second">
                    <label for="name">Password</label>
                    <input type="password" onChange={passwordchange} name="password" id="password" />
                </div>
                <div id="createAccountButton" className="field half first"><button onClick={handleClick} >Create Account</button></div>
            
        
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