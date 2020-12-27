import React from 'react';

export const Comment = (props) => {

  console.log("Props Comment", props)

    return     (
    
      <div className="comment-main-level">
        <div className="comment-avatar"></div>
        
        <div className="comment-box" key={props.comment.username}>
          <div className="comment-head">
            <h6 className="comment-name by-author"  ><a >{props.comment.username}</a></h6>
            <h6 className="comment-name "><span style={{"textTransform" : "initial"} }>{props.comment.comment}</span></h6>
            {/* <i className="fa fa-reply"></i>
            <i className="fa fa-heart"></i> */}
          </div>
          <div className="comment-content">
           </div>
        </div>
      </div>
    )

}