import React from 'react'
import PostHead from "./postHead";
import PostComment from "./postComment";
import './scss/post.scss'

export default function Post(props) {
    const x = props.data;
      
    return (
        <>
            <div key={x.id} className="post-with-content">
              <a href={x.author}/>
              <div className="poster-user"><PostHead user={x.author} date={x.createdAt}/></div>
              <div className="post-content">{x.content}</div>
            </div>
            <div className="comment-container">
                {x.comments.nodes.map(y => <PostComment data={y} />)}
            </div>
        </>
    )
}
