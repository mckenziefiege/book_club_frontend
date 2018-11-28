import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    searchTerm: ""
  }

  changeHandler = (event) => {
    console.log(this.state)
    this.setState({
    [event.target.name]: event.target.value
  });
};

  render() {
    return (
      <div>
      <p>Search books by title:</p>
      <input onChange={this.changeHandler} value={this.state.searchTerm} type="text" name="searchTerm" /><button onClick={() => this.props.searchHandler(this.state.searchTerm)}>Search</button>
      </div>
    )
  }
}

export default SearchBar
