import React from 'react';
import logo from './logo.svg';
import './App.css';
import dotenv from  'dotenv'
import {usernameChanged, passwordChanged, loginUser} from './actions/Authentication'
import { connect } from 'react-redux';
import Header from './PageComponents/Header'
import Head from './PageComponents/Head'
import Footer from './PageComponents/Footer'
import Home from './Pages/Home'
import './css/font-awesome.min.css'
import './css/main.css'

function App(props) {
  console.log("props", props)
  return (
    <div className="App">
      <Head/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
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

export default connect(mapStateToProps, {usernameChanged, passwordChanged, loginUser})(App)
