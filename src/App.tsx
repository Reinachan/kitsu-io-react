import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import Nav from './nav';
import ProfileNav from './profileNav';
import './scss/App.scss';
import client from './client';

const openSidebar = (open: string) => {
	let isOpen: string;
	if (document.documentElement.dataset.sidebar === 'true') {
		isOpen = 'false';
	} else {
		isOpen = 'true';
	}
	return (document.documentElement.dataset.sidebar = isOpen);
};

export default function App(this: any) {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div
					className='sidebar-backdrop'
					onClick={() => openSidebar('true')}></div>
				<div className='full-page'>
					<div className='sidenav'>
						<Nav />
					</div>

					<div className='page-content'>
						<div className='profile-navigator'>
							<ProfileNav />
						</div>
						<Routes />
					</div>
				</div>
			</Router>
			<button className='hamburger-menu' onClick={() => openSidebar('true')}>
				<svg
					width='2em'
					height='2em'
					viewBox='0 0 16 16'
					className='bi bi-list'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
					/>
				</svg>
			</button>
		</ApolloProvider>
	);
}
