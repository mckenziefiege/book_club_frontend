import React, { Component } from 'react';
import { connect } from 'react-redux'
import CommentCard from './CommentCard.js'

class CommentsContainer extends Component {

  state = {
    comments: []
  }

  postComment = (e) => {
    e.preventDefault()
    console.log(e.target.content.value)
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
      comments: [...this.state.comments, resp]
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
    console.log(this.state.comments)
    let commentCards = this.state.comments ? this.state.comments.map(comment => <CommentCard commentObj={comment} key={comment.id}/>) : null
    return (
      <div className="commentContainer">
      <form onSubmit={this.postComment}>
      <input type="text" name="content"/>
      <input type="submit"/>
      </form>
      Comments:
      {commentCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.auth.currentUser.user,
    club: state.user.club
  }
}

export default connect(mapStateToProps)(CommentsContainer)
