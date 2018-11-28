import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserBookCard extends Component {

  state = {
    clicked: false,
    reviewForm: false
  }

  handleClickedImage = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleReviewClicked = () => {
    console.log(this.state)
    this.setState({
      reviewForm: !this.state.reviewForm
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        title: e.target.title.value,
        content: e.target.content.value,
        rating: e.target.rating.value,
        book_id: e.target.bookid.value,
        user_id: e.target.userid.value
    })
  }
  fetch('http://localhost:3000/reviews', options)
}

  renderReviewForm (){
    return (
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <label>Title<input type="text" name="title"/></label><br />
      <label>Review<input type="text" name="content"/></label><br />
      <label>Rating<input type="text" name="rating"/></label><br />
      <input type="hidden" name="userid" value={this.props.user.user.id}/><br />
      <input type="hidden" name="bookid" value={this.props.bookObj.id}/><br />
      <input type="submit"/>
      </form>
      </div>
    )
  }

  render() {
    return (
      <div className="userbookcard">
      <img onClick={this.handleClickedImage} alt={this.props.bookObj.title} src={this.props.bookObj.image}/>
      <p>{this.props.bookObj.title}</p>
      {this.state.clicked &&
        <div>
      <p>{this.props.bookObj.author}</p>
      <p>{this.props.bookObj.description}</p>
      <button onClick={() => this.props.deleteBook(this.props.bookObj.id)}>Delete Book</button>
      <button onClick={this.handleReviewClicked}>Leave a Review</button>
      {this.state.reviewForm ? this.renderReviewForm() : null}
      </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

export default connect(mapStateToProps)(UserBookCard)
