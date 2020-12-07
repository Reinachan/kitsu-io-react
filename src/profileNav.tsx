import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import './scss/profile-nav.scss';

const query = loader('./GraphQL Queries/userProfile.gql');

type ProfileNavProps = {
	slug: string
};

export default function ProfileNav(props: ProfileNavProps) {
	const { slug } = props;

	const { data, loading } = useQuery(query, {
		variables: {
			slug: slug,
		},
	});
	
	return (
		<>
			<div className="profile-nav">
				{
					!loading 
					? 
					<div className="user-profile">
						<div className="profile-content">
							<img
								className="bell"
								src="../bell.svg"
								alt="bell symbol"
							/>
							<span className="name">{data.profile.name}</span>
							<span>View Profile</span>
							<img src={data.profile.avatarImage?.views[3].url} alt="profile"></img>
						</div>
						<div className="blurred"></div>
					</div>
					: <div className="loading"></div>
				}
			</div>
		</>
	);
}
