import React, { Component } from 'react';

class SearchBar extends Component {
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
          <p>Search books:</p>
          <input className="searchTerm" onChange={this.changeHandler} value={this.state.searchTerm} type="text" name="searchTerm" /><button className="searchButton" onClick={() => this.props.searchHandler(this.state.searchTerm)}><i className="fa fa-search"></i></button>
        </div>
      </div>
    )
  }
}

export default SearchBar
