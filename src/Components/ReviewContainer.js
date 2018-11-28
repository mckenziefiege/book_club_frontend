import React, { Component } from 'react';
import ReviewCard from './ReviewCard.js'
import UserLinks from './UserLinks.js'
import SearchReviews from './SearchReviews.js'

class ReviewContainer extends Component {
  state = {
    reviews: []
  }

  searchHandler = (search) => {
    fetch('http://localhost:3000/reviews')
    .then(resp => resp.json())
    .then(reviews => {
      let new_reviews = reviews.filter(review => review.book.title.toLowerCase().includes(search.toLowerCase()))
      console.log(new_reviews)
      return this.setState({
        reviews: new_reviews
      })
    })
  }

  render() {
    let reviewCards = this.state.reviews.map(review => <ReviewCard key={review.id} reviewObj={review}/>)
    return (
    <div>
    <UserLinks />
    <SearchReviews searchHandler={this.searchHandler}/>
    {reviewCards}
    </div>
    )
  }
}

export default ReviewContainer
