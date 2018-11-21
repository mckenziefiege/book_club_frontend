import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <p>inside book card</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {books: state.books}
}

export default connect(mapStateToProps)(BookCard)
