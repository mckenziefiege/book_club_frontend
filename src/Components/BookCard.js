import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookCard extends Component {

  addBookToList = (e, bookObj) => {
    console.log(bookObj)
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        title: this.props.bookObj.volumeInfo.title,
        author: this.props.bookObj.volumeInfo.authors[0],
        description: this.props.bookObj.volumeInfo.description,
        image:  this.props.bookObj.volumeInfo.imageLinks.thumbnail,
    })
  }
    fetch('http://localhost:3000/books', options)
    .then(resp => resp.json())
    .then(book => fetch('http://localhost:3000/user_books', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        status: "want to read",
        book_id: book.id,
        user_id: this.props.user.auth.currentUser.user.id,
      })
    }))
    .then(console.log)
  }

  render() {
    console.log(this.props)
    return (
      <div className="searchbookcard">
      <img className="searchbookimage" alt={this.props.bookObj.volumeInfo.title} src={this.props.bookObj.volumeInfo.imageLinks === undefined ? null : this.props.bookObj.volumeInfo.imageLinks.thumbnail}/>
      <p> {this.props.bookObj.volumeInfo.title} </p>
      <p> {this.props.bookObj.volumeInfo.authors} </p>
      <p> {this.props.bookObj.volumeInfo.description} </p>
      <button onClick={(e) => this.addBookToList(e, this.props.bookObj)}> ADD </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {books: state.books, user: state.user}
}

export default connect(mapStateToProps)(BookCard)
