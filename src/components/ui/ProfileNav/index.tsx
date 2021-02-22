import React from 'react';
import { useUserSessionQuery } from '../../../generated/graphql';
import Wrapper from './styles';
import Loading from '../Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function ProfileNav() {
	const { data, loading } = useUserSessionQuery({});

	console.log(data);

	return (
		<>
			<Wrapper>
				{!loading && data ? (
					<>
						<FontAwesomeIcon icon={faBell} />
						{data?.session?.profile?.name ? (
							<>
								<h2>data?.session?.profile?.name</h2>
								<span>View Profile</span>
							</>
						) : (
							<>
								<h2>Sign in</h2>
								<span>new account</span>
							</>
						)}
						<img
							className='profile-picture'
							src={data?.session?.profile?.avatarImage?.views[3]?.url}
							alt=''></img>
					</>
				) : (
					<Loading small={true} />
				)}
				<div className='blurred'></div>
			</Wrapper>
		</>
	);
}
