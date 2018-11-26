import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookCard extends Component {

  addBookToList = (e, bookObj) => {
    console.log(bookObj)
  }

  render() {
    return (
      <div>
      <img alt={this.props.bookObj.volumeInfo.title} src={this.props.bookObj.volumeInfo.imageLinks === undefined ? null : this.props.bookObj.volumeInfo.imageLinks.thumbnail}/>
      <p> {this.props.bookObj.volumeInfo.title} </p>
      <p> {this.props.bookObj.volumeInfo.authors} </p>
      <p> {this.props.bookObj.volumeInfo.description} </p>
      <button onClick={(e) => this.addBookToList(e, this.props.bookObj)}> ADD </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {books: state.books}
}

export default connect(mapStateToProps)(BookCard)
