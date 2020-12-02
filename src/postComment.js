import React from 'react'
import CommentHead from "./commentHead";
import './scss/post.scss'

export default function PostComment(props) {
    const x = props.data;
      
    return (
        <>
            <div key={x.id} className="post-with-content">
              <a href={x.author}/>
              <div className="commenter-user"><CommentHead user={x.author} date={x.createdAt}/></div>
              <div className="post-content">{x.content}</div>
            </div>
            {
                x.replies && (
                    <div className="comment-container">
                        {x.replies.nodes.map(y => <PostComment data={y} />)}
                    </div>
                )
            }
        </>
    )
}