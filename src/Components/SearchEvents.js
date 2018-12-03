import React, { Component } from 'react';

class SearchEvents extends Component {
  state = {
    searchTerm: ""
  }

  changeHandler = (event) => {
    this.setState({
    [event.target.name]: event.target.value
  });
};

  render() {
    return (
      <div className="searchbar">
        <div className="wrap">
          <p>Search book clubs in your area </p>
          <input className="searchTerm" onChange={this.changeHandler} value={this.state.searchTerm} type="text" name="searchTerm" placeholder="Zip Code"/><button className="searchButton" onClick={() => this.props.searchHandler(this.state.searchTerm)}><i className="fa fa-search"></i></button>
        </div>
      </div>
    )
  }
}

export default SearchEvents
