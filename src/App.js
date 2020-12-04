import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Posts from './posts';
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
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">User</Link>
                            </li>
                            <li>
                                <Link to="/about">Library</Link>
                            </li>
                            <li>
                                <Link to="/community">Community</Link>
                            </li>
                        </ul>
                    </nav>

                    <ProfileNav slug="Reinachan" />
                    <Switch>
                        <Route path="/community">
                            <Posts slug="Reinachan" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}
