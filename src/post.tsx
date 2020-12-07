import { Maybe, Post as _Post } from "./generated/graphql";

import React from 'react';
import Head from './PostingHead';
import PostComment from './postComment';
import TextBox from './controls/textBox';
import Likes from './likesDisplay';
import CollapsedText from './collapsedText';
import './scss/post.scss';
import './scss/postHead.scss';

type PostProps = {
    post: Maybe<_Post>
};

export default function Post(props: PostProps) {
	const { post } = props;

	if (!post) {
		throw new Error("Post needs to exist in order to be displayed ");
	}

	return (
		<div className="post-background">
			<div key={post.id} className="post-with-content">
				<div className="poster-user">
                    <Head user={post.author} date={post.createdAt} className="post-head" />
				</div>
				<div className="tag-divider"></div>

				<CollapsedText collapsed={true}>{post.content}</CollapsedText>
				<div className="post-likes">
					<Likes data={post.likes} postId={post.id} />
				</div>
			</div>
			<div className="comment-container all-comments">
				{post.comments.nodes?.map((y) => (
					<PostComment comment={y} />
				))}

				<div className="comment-box">
					<TextBox placeholder="type your comment" />
				</div>
			</div>
		</div>
	);
}
