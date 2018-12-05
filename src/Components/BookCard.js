import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBookToWantToRead, updateUser } from '../Redux/Actions/userActions.js'

class BookCard extends Component {

  addBookToList = (e, bookObj) => {
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
        user_id: this.props.user.id,
      })
    })).then(resp => resp.json())
    .then(resp => this.props.updateUser(resp.user))
  }

  render() {
    return (
      <div className="searchbookcard">
        <img className="searchbookimage" alt={this.props.bookObj.volumeInfo.title} src={this.props.bookObj.volumeInfo.imageLinks === undefined ? null : this.props.bookObj.volumeInfo.imageLinks.thumbnail}/>
        <p> {this.props.bookObj.volumeInfo.title} </p>
        <p> {this.props.bookObj.volumeInfo.authors} </p>
        <p> {this.props.bookObj.volumeInfo.description} </p>
        <button className="button" onClick={(e) => this.addBookToList(e, this.props.bookObj)}> ADD </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBookToWantToRead: (resp) => dispatch(addBookToWantToRead(resp)),
    updateUser: (resp) => dispatch(updateUser(resp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)
