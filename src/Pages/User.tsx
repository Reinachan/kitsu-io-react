import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import Post from '../post';
import '../scss/posts.scss';

const query = loader('../getProfileBySlug.gql');

export default function User(props: { slug: any; }) {
	const { data, loading } = useQuery(query, {
		variables: {
			slug: props.slug,
		},
	});

	return (
		// Why did you put it in one line
		<>
			<div className="posts-list">{!loading ? data.profile.posts.nodes.map((x: any) => <Post data={x} />) : <div className="loading-posts"></div>}</div>
		</>
	);
}
