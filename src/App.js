import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import Posts from './posts';
import './scss/App.scss'

const client = new ApolloClient({
  uri: 'https://kitsu.io/api/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Posts slug="Reinachan"/>
      </ApolloProvider>
    </>
  );
}

export default App;