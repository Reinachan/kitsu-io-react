import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Routes from "./Routes";
import Nav from './nav';
import ProfileNav from './profileNav';
import './scss/App.scss';

const client = new ApolloClient({
	uri: 'https://kitsu.io/api/graphql',
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="full-page">
					<div className="sidenav">
						<Nav />
					</div>

					<div className="page-content">
						<div className="profile-navigator">
							<ProfileNav slug="Reinachan" />
						</div>
						<Routes />
					</div>
				</div>
			</Router>
		</ApolloProvider>
	);
}