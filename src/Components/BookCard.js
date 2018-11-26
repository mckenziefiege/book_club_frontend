import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookCard extends Component {

  render() {
    console.log(this.props.bookObj.volumeInfo.imageLinks)
    return (
      <div>
      <img alt={this.props.bookObj.volumeInfo.title} src={this.props.bookObj.volumeInfo.imageLinks === undefined ? null : this.props.bookObj.volumeInfo.imageLinks.thumbnail}/>
      <p> {this.props.bookObj.volumeInfo.title} </p>
      <p> {this.props.bookObj.volumeInfo.authors} </p>
      <p> {this.props.bookObj.volumeInfo.description} </p>
      <button> ADD </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {books: state.books}
}

export default connect(mapStateToProps)(BookCard)
