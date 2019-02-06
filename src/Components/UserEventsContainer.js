import React, { Component } from 'react';
import UserLinks from './UserLinks.js'
import { connect } from 'react-redux'
import EventCard from './EventCard.js'

class UserEventsContainer extends Component {

  render() {
    let clubCards = this.props.user && this.props.user.events.map(club => <EventCard key={club.id} clubObj={club}/> )
    return (
      <div>
        <UserLinks />
        <h2 className="secondary-header user-tab-headers">Your Book Clubs</h2>
        {clubCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser.user}
}

export default connect(mapStateToProps)(UserEventsContainer)
