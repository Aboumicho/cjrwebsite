import React,{ useLayoutEffect, useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {changeComment, addComment, loadInitialComments} from '../actions/Comments'
import { CommentList } from '../PageComponents/CommentList';

const Commentaires = (props) => {
    let [comments, setComments] = useState(null)
    if(props.comments == null){
        props.loadInitialComments()
    }

    console.log("PROPS >> ", props)
    function leaveComment(){
        props.addComment({username: props.username, comment: props.comment})
    }

    function changeComment(event){
        props.changeComment(event.target.value)
    }


    const LeaveACommentButton = () =>{
        if(props.isLoggedIn && !props.addedComment ){
        return(
            <div>
            <textarea onChange={changeComment} value={props.comment} style={{"marginTop": "3rem"}} className="comment-box"   />
            <div><button style={{"marginTop": "2rem"}} onClick={leaveComment} >Envoyez</button></div>
            <div><h5>{props.error}</h5></div>
            </div>
        )
        }

        if(!props.isLoggedIn){
            return(<div></div>)
        }

        else{
            return(<h3>Commentaire ajoute, merci!</h3>)
        }
    }


    return(
        
    <div className="inner">
        <h1>Commentaires</h1>
        <CommentList comments={props.comments} />
        {LeaveACommentButton()}
    </div>)

} 

const mapStateToProps = (state) => {
    console.log(state.authReducers)
    console.log("COMMENTS", state.commentsReducers)
    return {
      username: state.authReducers.username,
      password: state.authReducers.password,
      isAdmin: state.authReducers.isAdmin,
      error: state.authReducers.error,
      loading: state.authReducers.loading,
      isLoggedIn: state.authReducers.isLoggedIn,
      error: state.commentsReducers.error,
      comment: state.commentsReducers.comment,
      addedComment: state.commentsReducers.addedComment,
      comments: state.commentsReducers.comments
    };
  };
  

export default connect(mapStateToProps, {changeComment, addComment, loadInitialComments})(Commentaires)