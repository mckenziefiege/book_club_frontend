import React, { Component } from 'react';

class CommentCard extends Component {

  render() {
    console.log('in comment card props', this.props)

    return (
      <div className="commentCard">
      <p>{this.props.commentObj.user.first_name}:</p><p>{this.props.commentObj.content}</p>
      </div>
    )
  }
}

export default CommentCard
