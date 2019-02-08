import React, { Component } from 'react';
import UserBookCard from './UserBookCard.js'
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'
import { updateRead, updateBookObjs } from '../Redux/actions.js'

class UserRead extends Component {

  componentDidMount () {
    const ids = this.props.user && this.props.read.map(user_book => user_book.book_id)
    let bookObjs = this.props.user && this.props.user.books.filter(book => ids.includes(book.id))
    this.props.updateBooks(bookObjs)
  }

  deleteBook = (obj) => {
    let choosen_user_book = this.props.read.filter(user_book => user_book.book_id === obj.id)
    let new_user_books = this.props.read.filter(user_book => user_book.id !== choosen_user_book.id)
    let id = choosen_user_book[0].id
      fetch(`http://localhost:3000/user_books/${id}`, {
        method: "DELETE"})
        .then(resp => resp.json())
        .then(resp => this.props.updateRead(new_user_books))
        let new_books = this.state.books.filter(book => book.id !== obj.id)
      this.setState({
        books: new_books
      })
    }

  handleFilter = (e) => {
    e.preventDefault()
    if (e.target.filter.value === 'A-Z') {
      let books = this.props.bookObjs.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    })
      let update = [...books]
      this.props.updateBooks(update)
    } else if (e.target.filter.value === 'Z-A') {
        let books = this.props.bookObjs.sort(function(a, b) {
        return b.title.localeCompare(a.title);
    })
      let update = [...books]
      this.props.updateBooks(update)
    } else if (e.target.filter.value === 'Favorites') {
      let books = this.props.bookObjs.filter(book => book.favorited === true)
      let update = [...books]
      this.props.updateBooks(update)
    }
  }

  render() {
    let bookCards = this.props.bookObjs !== undefined && this.props.bookObjs.map(book => <UserBookCard bookObj={book} key={book.id} deleteBook={this.deleteBook}/>)
    return (
      <div>
        <UserLinks />
        <h2 className="secondary-header user-tab-headers">Books Read</h2>
        <form onSubmit={(e) => this.handleFilter(e)}>
        <select className="filter" name="filter" >
          <option name="filter" value="A-Z">A-Z</option>
          <option name="filter" value="Z-A">Z-A</option>
          <option name="filter" value="Favorites">Favorites</option>
        </select>
        <input className="button" type="submit" />
        </form>
        {bookCards}
      </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.auth.user,
      read: state.books.read,
      bookObjs: state.bookObjs
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      updateRead: (resp) => dispatch(updateRead(resp)),
      updateBooks: (books) => dispatch(updateBookObjs(books))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(UserRead)
