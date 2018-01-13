import React, { Component } from 'react'
import readMovieQuery from "../queries/readMovie";
import { graphql, compose } from "react-apollo";
 class MovieDetail extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        MovieDetail
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