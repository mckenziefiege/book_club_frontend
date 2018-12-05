import React, { Component } from 'react';
import UserBookCard from './UserBookCard.js'
import { connect } from 'react-redux'
import { updateCurrentlyReading } from '../Redux/Actions/userActions.js'

class CurrentlyReading extends Component {
    state = {
      books: []
    }

    deleteBook = (obj) => {
      let choosen_user_book = this.props.currently_reading.filter(user_book => user_book.book_id === obj.id)
      let new_user_books = this.props.currently_reading.filter(user_book => user_book.id !== choosen_user_book.id)
      let id = choosen_user_book[0].id
        fetch(`http://localhost:3000/user_books/${id}`, {
          method: "DELETE"})
          .then(resp => resp.json())
          .then(resp => this.props.updateCurrentlyReading(new_user_books))
          let new_books = this.state.books.filter(book => book.id !== obj.id)
        this.setState({
          books: new_books
        })
      }

    componentDidMount () {
      const ids = this.props.user && this.props.currently_reading.map(user_book => user_book.book_id)
      let bookObjs = this.props.user && this.props.user.books.filter(book => ids.includes(book.id))
      this.setState({
        books: bookObjs
      })
    }

  render() {
    let bookCards = this.state.books !== undefined && this.state.books.map(book => <UserBookCard bookObj={book} key={book.id} deleteBook={this.deleteBook}/>)
    return (
      <div>
        {bookCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.auth.currentUser.user,
    read: state.user.books.read,
    want_to_read: state.user.books.want_to_read,
    currently_reading: state.user.books.currently_reading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentlyReading: (resp) => dispatch(updateCurrentlyReading(resp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyReading)
