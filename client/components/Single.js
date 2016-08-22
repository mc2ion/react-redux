import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component{
    render(){
        const postId        = this.props.params.postId;
        const i             = this.props.posts.findIndex((post)=> post.code === postId);
        const post          = this.props.posts[i];
        const postComment   = this.props.comments[postId] || [];
        return(
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}/>
                <Comments postComments={postComment} {...this.props}/>
            </div>
        )
    }
}
