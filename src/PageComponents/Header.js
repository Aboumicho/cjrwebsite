import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import useWindowSize from '../components/windowsize'
import HamburgerMenu from 'react-hamburger-menu'
import x_icon from '../svg/x_icon'
import Firebase from '../config/Firebase'
import {logoutUser, setUser} from '../actions/Authentication';


const Header = (props) => {
    const width = useWindowSize()[0]
    const height = useWindowSize()[1]
    let [toggle, setToggle] = useState(false)
    let [open, setOpen] = useState(false)

    let [user, setUser] = useState(null)

    Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            props.setUser(user)
        } 
    });

    function logout() { 
            props.logoutUser()
            setUser(null)
    }

    console.log("USER HEADER", user)

    function handleClick(){
        setOpen(!open)
    }

    let HeaderComponent = (
        <header id="header">
            <div className="inner"> 
                <a href="index.html" className="logo">CJR Construction</a>
                <nav id="nav" >
                    
                    <a href="/" >Home</a>
                    <a href="/commentaires" >Commentaires</a>
                    <a href="/gallerie" >Gallerie</a>
                    {user  ? <div><a>{user.email.split("@")[0]} </a> <button onClick={logout}>Logout</button></div>: <a href="/login" >Login</a>}
                </nav>
            </div>
        </header>)



    if(width < 981){
        let navBar = open ? (<nav id="navPanel" className="navPanelToggle visible">
        <button onClick={handleClick}> x </button>               
        <a href="index.html" >Home</a>
        <a href="/commentaires" >Commentaires</a>
        <a href="elements.html" >Elements</a>
        {user  ? <div><a>{user.email.split("@")[0]} </a> <button onClick={logout}>Logout</button></div>: <a href="/login" >Login</a>}
    </nav>) : null
        console.log("open: ", open)
        HeaderComponent = (
            <header id="header" > 
                <div className="inner" id="innerMobile" display="flex" flex-flow="row" justify-content="flex-end" height="100%" padding-top="4%"> 
                    <a href="index.html" className="logo">CJR Construction</a>
                    <div id="hamburgerMenu">
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleClick}
                        width={30}
                        height={30}
                        strokeWidth={1}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}/>
                        {navBar}
                    </div>
                </div>
        </header>
        )
    }
    console.log("Width of screen = ", width)
    console.log("height of screen = ", height)

    return(
        
        HeaderComponent)
}

const mapStateToProps = (state) => {
    console.log(state.authReducers)
    return {
      username: state.authReducers.username,
      isAdmin: state.authReducers.isAdmin,
      error: state.authReducers.error,
      loading: state.authReducers.loading,
      isLoggedIn: state.authReducers.isLoggedIn
    };
  };

export default connect(mapStateToProps, {logoutUser, setUser}) (Header)