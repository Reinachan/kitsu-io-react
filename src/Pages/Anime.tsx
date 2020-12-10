import { useGetAnimeBySlugQuery, Category, Maybe } from '../generated/graphql';
import { useParams } from 'react-router-dom';
import React from 'react';
import CollapsedText from '../collapsedText';
import BannerImage from '../controls/bannerImage';
import Dropdown from '../controls/dropdown';
import MediaTags from '../controls/mediaTags';
import './Anime.scss';

type AnimeUriParams = {
	slug: string;
};

function capitalizeFirstLetter(string: any) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Anime() {
	const { slug } = useParams<AnimeUriParams>();
	const { data, loading } = useGetAnimeBySlugQuery({
		variables: {
			slug,
		},
	});

	if (loading) {
		return <div className="loading-posts"></div>;
	}

	if (!data) {
		// TODO: BETTER HANDLING
		return <div>Yikes we've run into an issue</div>;
	}

	if (!data.anime) {
		// TODO: BETTER HANDLING
		return <div>Yikes we've run into an issue - no anime</div>;
	}

	const bannerImageURL: any = data.anime.bannerImage.original.url;

	// TODO: implement studio at productions > nodes > role, person > name
	// Currently this gives an error. Toyhammered is looking into it.

	const seasonDate =
		data.anime.status === 'UNRELEASED' ? data.anime.tba : capitalizeFirstLetter(data.anime.season?.toLowerCase()) + data.anime.startDate;

	console.log(data.anime.categories.nodes);

	return (
		<>
			<BannerImage url={bannerImageURL} className="bg" />
			<div className="page">
				<div className="synopsis">
					<span>Sypnosis</span>
					<CollapsedText collapsed={true}>{data.anime.description['en']}</CollapsedText>
				</div>
				<div className="top-anime">
					<div className="v-split">
						<div className="poster-and-edit">
							<img className="poster-image" src={data.anime.posterImage.original.url} alt="poster img" />
							<Dropdown className="watching-status" options={['Currently Watching', 'On Hold', 'Completed', 'Plan to Watch']} />
							<button className="edit-library">Edit Library Entry</button>
						</div>
						<div className="media-details">
							<span className="jp-title">{data.anime.titles.localized['ja_jp']}</span>
							<h1>{data.anime.titles.canonical}</h1>
							<div className="facts-line">
								<span>
									Season
									<span>{seasonDate}</span>
								</span>
								<span className="facts-divider">•</span>
								<span>
									Studio
									<span> KyoAni </span>
								</span>
								<span className="facts-divider">•</span>
								<span>
									Length
									<span> {data.anime.episodeCount} episodes </span>
								</span>
							</div>
							<div className="tagCategories">
								<div className="genre">
									<span>Genre:</span>
								</div>
								<div className="warning">
									<span>Content Warning:</span>
								</div>
								<div className="category">
									<span>Category:</span>
									{data.anime.categories.nodes?.map((x: any) => (
										<MediaTags key={x.id} categories={x} className="categories" />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
