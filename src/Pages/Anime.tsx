import { useGetAnimeBySlugQuery } from "../generated/graphql";
import { useParams } from "react-router-dom";
import React from 'react';
import CollapsedText from "../collapsedText";
import './Anime.scss';

type AnimeUriParams = {
	slug: string
};

export default function Anime() {
    const { slug } = useParams<AnimeUriParams>();
    const { data, loading } = useGetAnimeBySlugQuery({
        variables: {
            slug
        }
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

    // TODO: implement studio at productions > nodes > role, person > name
    // Currently this gives an error. Toyhammered is looking into it.
	return (
        <div className="page">
            <div
                className="bg" 
                style={{ backgroundImage: `url(${data.anime.bannerImage.original.url})`}} />
            <div> 
                <div className="v-split">
                    <div className="side">
                        <img className="poster-image" src={data.anime.posterImage.original.url} alt="poster img"/>
                    </div>

                    <span className="jp-title">{data.anime.titles.localized["ja_jp"]}</span>
                    <h1>{data.anime.titles.canonical}</h1>
                    <div className="facts-line">
                        <span>
                            Season
                            <span>{ data.anime.season?.toLowerCase() } { data.anime.startDate }</span>
                        </span>
                        <span>
                            Studio 
                            <span> KyoAni </span>
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
                        </div>
                    </div>
                </div>
                <span>Sypnosis</span>
                <CollapsedText collapsed={true}>
                    {data.anime.description["en"]}
                </CollapsedText>
            </div>
        </div>
	);
}

