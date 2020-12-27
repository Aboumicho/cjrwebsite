
import firebase from '../config/Firebase'

export const changeComment = (comment) => {
    return {
        type: 'COMMENT_CHANGED',
        payload: comment
      };
}

export const loadInitialComments = () => {
    return(dispatch) => {
        firebase.database().ref('/comments').on('value', (snapshot) =>{
            console.log("LoadinitialComments SNAPSHOT", snapshot)
            dispatch({type: "INITIAL_COMMENTS", payload: snapshot.val() })
        })
    }
}

export const addComment = ({username, comment}) => {
    const usernameMod = username.split("@")[0]
    const { currentUser } = firebase.auth();
    let commentExist = false
    console.log("CURRENT USER > ", currentUser)
    

    return (dispatch) => {
        firebase.database().ref(`/comments/${currentUser.uid}`).on('value' , (snapshot) =>{
            const data = snapshot.val()
            console.log("comment > DB > SNAPSHOT",data)
            if(data){
                dispatch({type: "COMMENT_EXISTS"})
            }
            else{
                firebase.database().ref(`/comments/${currentUser.uid}`).push({username:usernameMod, comment})
                .then(()=>{
                    dispatch({type: "ADD_COMMENT_SUCCESSFUL"})
                })
                .catch((err)=>{
                    dispatch({type: "ADD_COMMENT_FAILED", payload: err})
                }
                )
            }
        })
        
    }
}