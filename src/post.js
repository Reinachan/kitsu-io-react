import React from 'react';
import PostHead from './postHead';
import PostComment from './postComment';
import TextBox from './controls/textBox';
import './scss/post.scss';

export default function Post(props) {
    const x = props.data;

    function readMore() {
        const button = document.querySelector('#read-more' + x.id);
        if (button.textContent === 'Read More') {
            document.querySelector('#post-content' + x.id + '.post-content').style.maxHeight = 'inherit';
            button.innerHTML = 'Read Less';
        } else {
            document.querySelector('#post-content' + x.id + '.post-content').style.maxHeight = '200px';
            button.innerHTML = 'Read More';
        }
    }

    return (
        <>
            <div className="post-background">
                <div key={x.id} className="post-with-content">
                    <div className="poster-user">
                        <PostHead user={x.author} date={x.createdAt} />
                    </div>
                    <div className="tag-divider"></div>
                    <div className="sneky-trick">
                        <div className="post-content" id={'post-content' + x.id}>
                            <div className="markdown" id={'content' + x.id}>
                                {x.content}
                            </div>
                            <p className="read-more" id={'read-more' + x.id} onClick={readMore}>
                                Read More
                            </p>
                        </div>
                    </div>
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
