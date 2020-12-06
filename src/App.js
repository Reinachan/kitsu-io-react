import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Community from './Pages/Community';
import Groups from './Pages/Groups';
import Library from './Pages/Library';
import User from './Pages/User';
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
				<Nav />

				<ProfileNav slug="Reinachan" />
				<Switch>
					<Route path="/community" component="Community"></Route>
					<Route path="/library" component="Library"></Route>
					<Route path="/groups" component="Groups"></Route>
					<Route path="/" exact component="User">
						<User slug="Reinachan" />
					</Route>
				</Switch>
			</Router>
		</ApolloProvider>
	);
}
