import { Link } from 'react-router-dom';
import React from 'react';
import ProfileNav from './profileNav';
import './scss/nav.scss';

export default function Nav() {
	return (
			<>
				<div className="sidebar">
				<div className="kitsu-logo">
					<img src="./kitsu-logo.svg" alt="Kitsu Logo" />
				</div>
				<div className="main-navigation">
					<nav>
						<ul>
							<li>
								<Link to="/User">User</Link>
							</li>
							<li>
								<Link to="/library">Library</Link>
							</li>
							<li>
								<Link to="/">Community</Link>
							</li>
							<li>
								<Link to="/browse">Browse</Link>
							</li>
							<li>
								<Link to="/groups">Groups</Link>
							</li>
						</ul>
					</nav>
					</div>
				</div>
			</>
	);
}
