export function increment(index){
    return{
        type: 'INCREMENT_LIKES',
        index
    }
}

export function addComment(postId, author,comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
}

//remove comments
export function removeComment(postId, i){
    return{
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}
