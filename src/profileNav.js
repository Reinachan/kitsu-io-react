import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import UserProfile from './userProfile';
import './scss/profile-nav.scss';

const query = loader('./getProfileBySlug.gql');

export default function ProfileNav(props) {
	const { data, loading } = useQuery(query, {
		variables: {
			slug: props.slug,
		},
	});

	return (
		<>
			<div className="profile-nav">{!loading ? <UserProfile data={data.profile} /> : <div className="loading"></div>}</div>
		</>
	);
}
