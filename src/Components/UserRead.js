import React, { Component } from 'react';
import UserBookCard from './UserBookCard.js'
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'

class UserRead extends Component {
  state = {
    user_books: [],
    books: []
  }


  deleteBook = (obj) => {
    let user_book = this.state.user_books.filter(user_book => user_book.book_id === obj.id)
    let new_id = user_book[0].id
    fetch(`http://localhost:3000/user_books/${new_id}`, {
      method: "DELETE"
    }).then(resp => resp.json()).then(resp => this.setState({user_books: resp.read}))
    let new_books = this.state.books.filter(book => book.id !== obj.id)
    this.setState({
      books: new_books
    })
  }


  componentDidMount () {
    this.props.user.user !== undefined && this.setState({user_books: this.props.user.user.read})
    let book_ids = this.props.user.user !== undefined ? this.props.user.user.read.map(user_book => user_book.book_id) : null
    let bookObjs = this.props.user.user !== undefined ? this.props.user.user.books.filter(book => book_ids.includes(book.id)) : null
    this.props.user.user !== undefined && this.setState({books: bookObjs})
    console.log(this.props)
  }

  render() {
    console.log(this.props)
    let bookCards = this.props.user.user !== undefined ? this.state.books.map(book => <UserBookCard bookObj={book} key={book.id} deleteBook={this.deleteBook}/>) : null
    return (
      <div>
      <UserLinks />
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
