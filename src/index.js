import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authLink = new ApolloLink((operation, forward) => {
  const adminToken = localStorage.getItem('admin');
  const headers = {}
  if(adminToken){
    headers.admin = adminToken
  }
  // Use the setContext method to set the HTTP headers.
  operation.setContext({ headers });

  // Call the next link in the middleware chain.
  return forward(operation);
})

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});



ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
   document.getElementById('root')
);
