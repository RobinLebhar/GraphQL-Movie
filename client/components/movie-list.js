import React, { Component } from 'react'
import { graphql } from "react-apollo";
import readMoviesQuery from "../queries/readMovies";
import { Link } from "react-router"
class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>Liste de film</h1>
        <ul className="collection">
            {this.renderMovies()}
        </ul>
        <Link to="/movies/create" className="btn-floating btn-large waves-effect waves-light blue right">
            <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }

  renderMovies(){
      if(!this.props.data.loading){
        return this.props.data.movies.map( (movie) => {
            return <li className="collection-item" key={movie.id}>{movie.title}</li>;
        })
      }else {
          return "Chargement des données...";
      }
     
  }
}

export default graphql(readMoviesQuery)(MovieList); 
