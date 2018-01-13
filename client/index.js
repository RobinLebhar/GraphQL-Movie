import "./style/style.css"
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import MovieList from "./components/movie-list";
import MovieCreate from "./components/movie-create";
import MovieDetail from "./components/movie-detail";
import { Router,  Route, hashHistory, IndexRedirect } from "react-router";
const client = new ApolloClient ({});

const Root = () => {
  return (
  <ApolloProvider client={client}>
  <Router history={hashHistory}>
    <Route path="/">
    <IndexRedirect to="movies"/>
    <Route path="movies" component={MovieList}/>
    <Route path="movies/create" component={MovieCreate}/>
    <Route path="movie/:id" component={MovieDetail}/>
    </Route>
  </Router> 
  </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);