import React from 'react';
import './scss/profile-nav.scss';
import { useUserSessionQuery, UserSessionQuery } from './generated/graphql';

export default function ProfileNav() {
	const { data, loading } = useUserSessionQuery({});

	console.log(data);

	return (
		<>
			{/* <div className='profile-nav'>
				{!loading ? (
					<div className='user-profile'>
						<div className='profile-content'>
							<img className='bell' src='./bell.svg' alt='bell symbol' />
							<span className='name'>{data?.name}</span>
							<span>View Profile</span>
							<img src={data?.profile.avatarImage?.views[3]?.url} alt='profile'></img>
						</div>
						<div className='blurred'></div>
					</div>
				) : (
					<div className='loading'></div>
				)}
			</div> */}
		</>
	);
}
