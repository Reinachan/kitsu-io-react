import { useGetProfileBySlugQuery } from "../generated/graphql";
import { useParams } from "react-router-dom";
import React from 'react';
import Post from '../post';
import '../scss/posts.scss';

type UserUriParams = {
	slug: string
};

export default function User() {
	const { slug } = useParams<UserUriParams>();
	const { data, loading, error } = useGetProfileBySlugQuery({
		variables: {
			slug: slug,
		},
		errorPolicy: "all"
	});

	if (loading) {
		return <div className="loading-posts"></div>;
	}

	if (error !== undefined) {
		console.error(error);
	}

	if (data === undefined) {
		return <div>User doesnt exist</div>;
	}

	if (data.profile === undefined || data.profile == null) {
		return <div>Profile doesnt exist</div>;
	}

	return (
		data.profile.posts.nodes === undefined || data.profile.posts.nodes == null
		? <div> No posts </div>
		: <div className="posts-list">
			{
				data.profile.posts.nodes.filter(x => x).map((x: any) => <Post post={x} />) 
			}
		</div>
	);
}
