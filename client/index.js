import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient ({});

const Root = () => {
  return (
  <ApolloProvider client={client}>
    <h1>Bienvenue sur GraphQL Movie ;)</h1>
  </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
