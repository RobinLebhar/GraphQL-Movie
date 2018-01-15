import React, { Component } from 'react'
import readMovieQuery from "../queries/readMovie";
import { graphql, compose } from "react-apollo";
import ReviewCreate from "./review-create";
 class MovieDetail extends Component {

  render() {
    return (
      <div>
        MovieDetail
        <ReviewCreate movieId={this.props.params.id}/>
      </div>
    )
  }
}
export default compose(
    graphql(readMovieQuery,{
      name:"readMovieQuery",
      options : (props) => {
        return {
            variables : {
                id : props.params.id
            }
        }
      }
    }),
  )(MovieDetail); 