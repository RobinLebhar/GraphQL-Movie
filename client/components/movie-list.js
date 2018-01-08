import React, { Component } from 'react'
import { graphql } from "react-apollo";
import gql from "graphql-tag";
class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>Liste de film</h1>
        <ul className="collection">
            {this.renderMovies()}
        </ul>
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
const query = gql`
{
    movies{
        id,
        title
    }
}
`;
export default graphql(query) (MovieList); 
