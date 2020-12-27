import React,{ useLayoutEffect, useState, useEffect } from 'react';
import {usernameChanged, passwordChanged, loginUser, createUser} from '../actions/Authentication'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Gallerie = (props) =>{
    const {page,id} = props

    console.log("Page Gallerie: ", page)

    return(<div className="inner">
        <h1 style={{"marginTop" : "1rem"}}>Gallerie</h1>
        
    </div>)
}