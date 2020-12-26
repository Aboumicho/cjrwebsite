import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import useWindowSize from '../components/windowsize'
import HamburgerMenu from 'react-hamburger-menu'
import x_icon from '../svg/x_icon'
import Firebase from '../config/Firebase'

const Header = (props) => {
    const width = useWindowSize()[0]
    const height = useWindowSize()[1]
    let [toggle, setToggle] = useState(false)
    let [open, setOpen] = useState(false)

    let [user, setUser] = useState(null)

    Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
        } 
    });

    console.log("USER HEADER", user)
    

    function handleClick(){
        setOpen(!open)
    }

    let HeaderComponent = (
        <header id="header">
            <div class="inner"> 
                <a href="index.html" class="logo">CJR Construction</a>
                <nav id="nav" >
                    
                    <a href="/" >Home</a>
                    <a href="generic.html" >Generic</a>
                    <a href="elements.html" >Elements</a>
                    {user ? <div><a>{user.email} </a> <a>Logout</a></div>: <a href="/login" >Login</a>}
                </nav>
            </div>
        </header>)



    if(width < 981){
        let navBar = open ? (<nav id="navPanel" class="navPanelToggle visible">
        <button onClick={handleClick}> x </button>               
        <a href="index.html" >Home</a>
        <a href="generic.html" >Generic</a>
        <a href="elements.html" >Elements</a>
        {user ? <div><a>{user.email} </a> <a>Logout</a></div>: <a href="/login" >Login</a>}
    </nav>) : null
        console.log("open: ", open)
        HeaderComponent = (
            <header id="header" > 
                <div class="inner" id="innerMobile" display="flex" flex-flow="row" justify-content="flex-end" height="100%" padding-top="4%"> 
                    <a href="index.html" class="logo">CJR Construction</a>
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

export default connect(mapStateToProps) (Header)