import React,{ useLayoutEffect, useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login'
import {getFacebookID} from '../actions/Facebook'
import {createUser, loginUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Facebook = (props) =>{
    let [redirect, setRedirect] = useState(false)

    props.getFacebookID()
    function responseFacebook(response){
        console.log("RESPONSE FACEBOOK",response)
        if(response){
            props.createUser({email:response.email, password: response.userID})
            props.loginUser({username: response.email, password: response.userID})
            setRedirect(true)
        }
    }

    function componentClicked(){
        console.log("CLICKED FACEBOOK BUTTON")
    }

    console.log("fACEBOOK ", props)

    return(
        redirect ? 
        <Redirect to="/" /> :
        <FacebookLogin
        appId={props.appID}
        autoLoad={true}
        icon="fa-facebook"
        fields="name,email,picture"
        onClick={()=>componentClicked}
        callback={responseFacebook} />
        
    )
}


const mapStateToProps = (state) => {
    console.log(state.authReducers)
    return {
      username: state.authReducers.username,
      password: state.authReducers.password,
      isAdmin: state.authReducers.isAdmin,
      error: state.authReducers.error,
      loading: state.authReducers.loading,
      appID: state.facebookReducers.appID
    };
  };
  

export default connect(mapStateToProps, {getFacebookID, createUser, loginUser}) (Facebook);