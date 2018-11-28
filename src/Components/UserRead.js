import React, { Component } from 'react';
import UserBookCard from './UserBookCard.js'
import { connect } from 'react-redux'

class UserRead extends Component {
  state = {
    books: []
  }


  deleteBook = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE"
    })
  }

  render() {
    let user_books = this.props.user.user !== undefined ? this.props.user.user.read : null
    let book_ids = this.props.user.user !== undefined ? user_books.map(user_book => user_book.book_id) : null
    let bookObjs = this.props.user.user !== undefined ? this.props.user.user.books.filter(book => book_ids.includes(book.id)) : null
    let bookCards = this.props.user.user !== undefined ? bookObjs.map(book => <UserBookCard bookObj={book} key={book.id} deleteBook={this.deleteBook}/>) : null
    return (
      <div>
      <h2>{"Books You've Read"}</h2>
      {bookCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

export default connect(mapStateToProps)(UserRead)
