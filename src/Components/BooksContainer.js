import React, { Component } from 'react';
import SearchBar from './SearchBar.js'
import BookCard from './BookCard.js'
import UserLinks from './UserLinks.js'

class BooksContainer extends Component {

  state = {
    books: [],
    userBooks: []
  }

  searchHandler = (search) => {
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + search)
    .then(resp => resp.json())
    .then(data => this.setState({
      books: data.items
    }))
}

  render() {
    let bookCards = this.state.books.map(book => <BookCard key={book.id} bookObj={book}/>)
    return (
      <div>
      <UserLinks />
      <SearchBar searchHandler={this.searchHandler}/>
      {bookCards}
      </div>
    )

  }

}

export default BooksContainer
