import { NavLink } from 'react-router-dom';
import React from 'react';
import './scss/nav.scss';

export default function Nav() {
	return (
			<>
				<div className="sidebar">
				<div className="kitsu-logo">
					<img src="../kitsu-logo.svg" alt="Kitsu Logo" />
				</div>
				<div className="main-navigation">
					<nav>
						<ul>
							<li>
								<NavLink activeClassName="active-tab" to="/user/">User</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active-tab" to="/library">Library</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active-tab" to="/community">Community</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active-tab" to="/browse" isActive={(match, location) => {
									if (!match && !/\/(anime|manga)\//.test(location.pathname)) {
								      return false;
								    }
								
								    return true;
								  }}>Browse</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active-tab" to="/groups">Groups</NavLink>
							</li>
						</ul>
					</nav>
					</div>
				</div>
			</>
	);
}
