import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import './scss/profile-nav.scss';

const query = loader('./GraphQL Queries/userProfile.gql');

export default function ProfileNav() {

	const { data, loading } = useQuery(query);
	
	console.log(data)


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
								src="./bell.svg"
								alt="bell symbol"
							/>
							<span className="name">{data.name}</span>
							<span>View Profile</span>
							<img src={data.avatarImage?.views[3].url} alt="profile"></img>
						</div>
						<div className="blurred"></div>
					</div>
					: <div className="loading"></div>
				}
			</div>
		</>
	);
}
