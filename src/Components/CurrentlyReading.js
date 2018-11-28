import React, { Component } from 'react';
import UserBookCard from './UserBookCard.js'
import { connect } from 'react-redux'

class CurrentlyReading extends Component {

  render() {
    let user_books = this.props.user.user !== undefined ? this.props.user.user.currently_reading : null
    let book_ids = this.props.user.user !== undefined ? user_books.map(user_book => user_book.book_id) : null
    let bookObjs = this.props.user.user !== undefined ? this.props.user.user.books.filter(book => book_ids.includes(book.id)) : null
    let bookCards = this.props.user.user !== undefined ? bookObjs.map(book => <UserBookCard bookObj={book} key={book.id}/>) : null
    return (
      <div>
      {bookCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

export default connect(mapStateToProps)(CurrentlyReading)
