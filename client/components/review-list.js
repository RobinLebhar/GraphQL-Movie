import React, { Component } from 'react'

export default class ReviewList extends Component {
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
          return <li key={review.id} className="collection-item">{review.content} </li>
      })
  }
}
