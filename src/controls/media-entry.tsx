import { Maybe, LibraryEntry } from '../generated/graphql'

import React from 'react';
import '../scss/animanga-library-card.scss'

type MediaEntryLibraryProps = {
  entry: Maybe<LibraryEntry>
};

export default function MediaEntryLibrary(props: MediaEntryLibraryProps) {

  const { entry } = props;

  console.log(entry);
  
    return (
      <>
        <div className="animanga-card">
              <div style={{backgroundImage: `url(${entry?.media.posterImage.views[3].url})`}} className="animanga-image"/>
              <hr className="animanga-divider" />
              <div className="animanga-quick-info">
                <p className="episode-count">Ep. 1</p>
                <div />
                <p className="score">9/10</p>
              </div>
        </div>
        </>
    );
}

