import React, { Component } from 'react';
import UserLinks from './UserLinks.js'
import SearchEvents from './SearchEvents.js'
import EventCard from './EventCard.js'

class EventsContainer extends Component {
  state = {
    events: []
  }

  searchHandler = (search) => {
    fetch('http://localhost:3000/events')
    .then(resp => resp.json())
    .then(clubs => {
      let new_clubs = clubs.filter(club => club.zipcode === search)
      this.setState({
        events: new_clubs
      })
    })
  }

  render() {
    let clubCards = this.state.events.map(club => <EventCard clubObj={club} key={club.id}/>)
    return (
      <div>
        <UserLinks />
        <SearchEvents searchHandler={this.searchHandler}/>
        {clubCards}
      </div>
    )
  }
}

export default EventsContainer
