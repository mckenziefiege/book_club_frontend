import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeSearchTerm } from '../Redux/actions.js'

class SearchReviews extends Component {

  changeHandler = (event) => {
    this.props.changeSearchTerm(event.target.value)
  }

  render() {
    return (
      <div className="searchbar">
        <div>
          <h2 className="secondary-header">Search reviews</h2>
          <input className="searchTerm" placeholder="Search by book title" onChange={this.changeHandler} value={this.props.searchTerm} type="text" name="searchTerm" />
          <button className="button" onClick={(title) => this.props.searchHandler(this.props.searchTerm)}>Search</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchTerm: (letter) => dispatch(changeSearchTerm(letter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchReviews)
