import React, { Component } from 'react';
import UserLinks from './UserLinks.js'
import SearchEvents from './SearchEvents.js'

class EventsContainer extends Component {

  state = {
    events: []
  }

  searchHandler = (search) => {
    fetch('http://localhost:3000/events')
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
      <UserLinks />
      <SearchEvents searchHandler={this.searchHandler}/>
      </div>
    )

  }

}

export default EventsContainer
