import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import MovieList from "./components/movie-list";
const client = new ApolloClient ({});

const Root = () => {
  return (
  <ApolloProvider client={client}>
    <MovieList/>
  </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
