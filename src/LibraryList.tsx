import { useGetAnimeListQuery } from "./generated/graphql";

import React from 'react'
import MediaEntryLibrary from './controls/media-entry';
import './scss/library-list.scss'


export default function LibraryList() {
  const slug = 'Reinachan';

	const { data, loading } = useGetAnimeListQuery({
		variables: {
			slug: slug,
		},
  });

  if (loading) {
    return <div>Do the loading thing</div>;
  }

  if (!data) {
      // TODO: BETTER HANDLING
      return <div>Yikes we've run into an issue</div>;
  }

  if (!data.profile) {
      // TODO: BETTER HANDLING
      return <div>Yikes we've run into an issue - no profile</div>;
  }

  
  let completedAnime = data.profile.library.completed;
  return (
    <div className ="library-grid">
      {completedAnime.nodes?.map((x: any) => <MediaEntryLibrary entry={x}/>)}
    </div>
  )
}
