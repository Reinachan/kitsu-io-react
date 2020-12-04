import React from 'react';
import PostHead from './postHead';
import PostComment from './postComment';
import TextBox from './controls/textBox';
import './scss/post.scss';

export default function Post(props) {
    const x = props.data;

    return (
        <>
            <div className="post-background">
                <div key={x.id} className="post-with-content">
                    <div className="poster-user">
                        <PostHead user={x.author} date={x.createdAt} />
                    </div>
                    <div className="tag-divider"></div>
                    <div className="post-content">{x.content}</div>
                </div>
                <div className="comment-container all-comments">
                    {x.comments.nodes.map((y) => (
                        <PostComment data={y} />
                    ))}

                    <div className="comment-box">
                        <TextBox placeholder="type your comment" />
                    </div>
                </div>
            </div>
        </>
    );
}
