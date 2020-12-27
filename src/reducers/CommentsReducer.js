const INITIAL_STATE = {
    username: "",
    comment: "",
    error: null,
    addedComment: false, 
    comments: null
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type){
        case "ADDED_COMMENT":
            return{
                ...state,
            }
        case "ADD_COMMENT_SUCCESSFUL":
            return{
                ...state,
                error: null,
                addedComment: true

            }
        case "ADD_COMMENT_FAILED": 
            
            return {
                ...state,
                error : action.payload.message
            }
        case "COMMENT_CHANGED":
            return {
                ...state,
                comment: action.payload
            }
        case "COMMENT_EXISTS":
            
            return{
                ...state,
                error: "Vous n'avez le droit qu'à un seul commentaire par usager"
            }

        case "INITIAL_COMMENTS":
            return{
                ...state,
                comments: action.payload
            }

        case "REGISTER_FAILURE_EMAIL_IN_USE":
            return{
                ...state,
                error: action.payload
            }
        default:
            return{
                ...state
            }
    }
}