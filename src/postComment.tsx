import { Maybe, Comment } from "./generated/graphql";

import React from 'react';
import Head from './PostingHead';
import './scss/commentHead.scss';
import './scss/comments.scss';

type CommentProps = {
    comment: Maybe<Comment>
};

export default function PostComment(props: CommentProps) {
    const { comment } = props;

	if (!comment) {
		throw new Error("Comment needs to exist in order to be displayed")
    }
    
    return (
        <>
            <div key={comment.id} className="comment-with-content">
                <div className="commenter-user">
                    <Head user={comment.author} date={comment.createdAt} className="comment-head" />
                </div>
                <div className="post-content">{comment.content}</div>
            </div>
            {comment.replies && (
                <div className="reply-container">
                    {comment.replies.nodes?.map((y) => (
                        <PostComment comment={y} />
                    ))}
                </div>
            )}
        </>
    );
}
