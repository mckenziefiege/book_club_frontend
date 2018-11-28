import React, { Component } from 'react';

class ReviewCard extends Component {

  render() {
    return (
    <div className="reviewcard">
    <p>{this.props.reviewObj.title}</p>
    <p>{this.props.reviewObj.user.username}</p>
    <p>{this.props.reviewObj.rating}</p>
    <p>{this.props.reviewObj.content}</p>
    </div>
    )

  }

}

export default ReviewCard
