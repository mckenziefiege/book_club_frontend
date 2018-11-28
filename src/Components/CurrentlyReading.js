import React, { Component } from 'react';
import UserBookCard from './UserBookCard.js'
import { connect } from 'react-redux'

class CurrentlyReading extends Component {
  state = {
    user_books: [],
    books: []
  }

  deleteBook = (obj) => {
    let user_book = this.state.user_books.filter(user_book => user_book.book_id === obj.id)
    let new_id = user_book[0].id
    fetch(`http://localhost:3000/user_books/${new_id}`, {
      method: "DELETE"
    }).then(resp => resp.json()).then(resp => this.setState({user_books: resp.currently_reading}))
    let new_books = this.state.books.filter(book => book.id !== obj.id)
    this.setState({
      books: new_books
    })
  }

  componentDidMount () {
    this.props.user.user !== undefined && this.setState({user_books: this.props.user.user.currently_reading})
    let book_ids = this.props.user.user !== undefined ? this.props.user.user.currently_reading.map(user_book => user_book.book_id) : null
    let bookObjs = this.props.user.user !== undefined ? this.props.user.user.books.filter(book => book_ids.includes(book.id)) : null
    this.props.user.user !== undefined && this.setState({books: bookObjs})
  }

  render() {
    console.log(this.state)
    let bookCards = this.props.user.user !== undefined ? this.state.books.map(book => <UserBookCard bookObj={book} key={book.id} deleteBook={this.deleteBook}/>) : null
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
