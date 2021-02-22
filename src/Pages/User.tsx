import {
	useGetProfileBySlugQuery,
	GetProfileFragment,
} from '../generated/graphql';
import { useParams } from 'react-router-dom';
import { InfiniteLoader, List } from 'react-virtualized';
import React from 'react';
import Post from '../components/posts/post';
import '../scss/Posts/posts.scss';
import Loading from '../components/ui/Loading';

type UserUriParams = {
	slug: string;
};

export default function User() {
	const { slug } = useParams<UserUriParams>();
	const isId = /^[0-9]+$/.test(slug);

	const { data, loading, error, fetchMore } = useGetProfileBySlugQuery({
		variables: {
			slug: slug,
			id: isId ? slug : '0',
			isId: isId,
			postFirst: 10,
		},
		errorPolicy: 'all',
	});

	let profile: GetProfileFragment | undefined | null =
		data?.findProfileById ?? data?.findProfileBySlug;

	/* let startCursor = profile?.posts?.pageInfo?.startCursor;
	let endCursor = profile?.posts?.pageInfo?.endCursor; */

	/* const remoteRowCount: number | null | undefined = profile?.posts.totalCount; */

	/* const list: number[] = []; */

	/* function isRowLoaded(index: number) {
		return !!list[index];
	} */

	/* function loadMoreRows(startIndex: string, stopIndex: string) {
		fetchMore({
			variables: {
				slug: slug,
				id: isId ? slug : '0',
				isId: isId,
				postCursor: startIndex,
				postFirst: stopIndex,
			},
		});
	} */

	if (loading) {
		return <Loading />;
	}

	if (error !== undefined) {
		console.error(error);
	}

	if (data === undefined) {
		return <div>User doesnt exist</div>;
	}

	if (profile === undefined || profile == null) {
		return <div>Profile doesnt exist</div>;
	}

	console.log(data);

	return (
		<>
			{profile.posts.nodes === undefined || profile.posts.nodes == null ? (
				<div> No posts </div>
			) : (
				profile?.posts?.nodes
					?.filter((x: any) => x)
					.map((x: any) => (
						<div className='posts-list'>
							<Post post={x} />
						</div>
					))
			)}
		</>
	);
}
