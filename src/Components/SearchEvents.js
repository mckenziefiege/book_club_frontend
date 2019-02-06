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
        <div>
          <h2 className="secondary-header">Search book clubs in your area</h2>
          <input className="searchTerm" onChange={this.changeHandler} value={this.state.searchTerm} type="text" name="searchTerm" placeholder="Zip Code"/><button className="button" onClick={() => this.props.searchHandler(this.state.searchTerm)}>Search</button>
        </div>
      </div>
    )
  }
}

export default SearchEvents
