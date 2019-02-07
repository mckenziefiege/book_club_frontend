import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentCard from './CommentCard.js'

class CommentsContainer extends Component {
  state = {
    comments: []
  }

  postComment = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/comments', {
      method: "POST",
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        content: e.target.content.value,
        user_id: this.props.user.id,
        event_id: this.props.club.id
      })
    }).then(resp => resp.json())
    .then(resp => this.setState({
      comments: [resp, ...this.state.comments]
    }))
  }

  componentDidMount() {
    fetch(`http://localhost:3000/events/${this.props.club.id}`)
      .then(resp => resp.json())
      .then(resp => this.setState({
        comments: resp.comments
      }))
  }

  render() {
    let commentCards = this.state.comments ? this.state.comments.map(comment => <CommentCard commentObj={comment} key={comment.id}/>) : null
    return (
      <div className="commentContainer">
        <form onSubmit={this.postComment}>
          <textarea rows="3" cols="90" type="text" name="content" placeholder="Write something..."></textarea><br />
          <input className="button" type="submit"/>
        </form>
        {commentCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    club: state.club
  }
}

export default connect(mapStateToProps)(CommentsContainer)
