import React from 'react';
import LibraryList from '../LibraryList';
import BannerImage from '../controls/bannerImage'
import '../scss/Library/library.scss';


export default function Library() {

	return (
		<>
		<BannerImage url="http://images4.fanpop.com/image/photos/20100000/k-on-k-on-20132940-2560-1440.jpg" className="banner" />
		<div className="page-divider">
		<h1>Anime</h1> {/* <hr /> */}
		</div>

		<div className="library-list">
			<LibraryList />
		</div>


		</>
	);
}
