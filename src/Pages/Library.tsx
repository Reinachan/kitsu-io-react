import React from 'react';
import LibraryList from '../LibraryList';
import '../scss/library.scss';


export default function Library() {

	return (
		<>
		<div className="profile-banner">
			<img className="banner-image" alt="banner" src="http://images4.fanpop.com/image/photos/20100000/k-on-k-on-20132940-2560-1440.jpg" width="100%" />
			<div className="img-fade-out" />
		</div> 
		<div className="page-divider">
		<h1>Anime</h1> {/* <hr /> */}
		</div>

		<div className="library-list">
			<LibraryList />
		</div>


		</>
	);
}
