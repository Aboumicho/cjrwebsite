import React from 'react';
import {Comment} from './Comment'
export const CommentList = (props) => {
let comments = props.comments

console.log("COMMENTS LIST ", comments)
let commentList = []
let commentsArray = []
if(comments){
// comments.map(e=>{
//     console.log("EEEEEEEEEE",e)
// })
Object.keys(comments).forEach((key) => {
    Object.keys(comments[key]).forEach( (key2) =>{
        const commentL = comments[key]
        console.log("comment >>>>>>>>>> ", commentL[key2])
        commentList.push(<Comment key={commentL[key2]} comment={commentL[key2]} />)
        commentsArray.push({username:commentL[key2].username , comment:commentL[key2].comment  })
    })
})

console.log("commentList >>>> ", commentList.length)

}
return(
<div className="comments-container">
    {commentList}
</div>)

}