import React, { Component } from 'react'
import likeReviewMutation from "../queries/likeReview";
import likeReview from '../queries/likeReview';
import { graphql, compose } from "react-apollo";
class ReviewList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
            {this.props.reviews && this.renderReviewList()}
        </ul>
      </div>
    )
  }

  renderReviewList(){
      return this.props.reviews.map( (review) => {
          return (
          <li key={review.id} className="collection-item">
            {review.content} 
            <div className="secondary-content delete_button">
              <i className="material-icons" onClick= {() =>  this.likeReview(review.id)}>thumb_up</i>
              {review.likes}
            </div>
          </li>
          )
      })
  }

  likeReview(id){
    this.props.likeReviewMutation({variables: {id}})
  }
}


export default compose(
  graphql( likeReviewMutation, {
    name:"likeReviewMutation"
  })
)(ReviewList)