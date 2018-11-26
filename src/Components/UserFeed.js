import React, { Component } from 'react';
import { connect } from 'react-redux'
import BooksContainer from './BooksContainer.js'
import { Link } from 'react-router-dom'

class UserFeed extends Component {

  render() {
    return (
      <div>
      <BooksContainer />
      <h1>Logged in as: {this.props.user.user && this.props.user.user.first_name}</h1>
      <p>{this.props.user.user && `${this.props.user.user.city}, ${this.props.user.user.state}`}</p>
      <img alt={this.props.user.user && this.props.user.user.first_name} height="200" src={this.props.user.user && this.props.user.user.image} />
      <Link to='/read'><p>{"Books You've Read"}</p></Link>
      <Link to='books-to-read'><p>{"Reading List"}</p></Link>
      <Link to='your-events'><p>{"Your Events"}</p></Link>
      <p></p>
      <p></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

export default connect(mapStateToProps)(UserFeed)
