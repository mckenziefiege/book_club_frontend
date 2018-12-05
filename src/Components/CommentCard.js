import React, { Component } from 'react';

class CommentCard extends Component {

  render() {
    return (
      <div className="commentCard">
        <p>{this.props.commentObj.user.username}</p>
        <p className="commentdate"> {this.props.commentObj.readable_time} </p>
        <p>{this.props.commentObj.content}</p>
      </div>
    )
  }
}

export default CommentCard
