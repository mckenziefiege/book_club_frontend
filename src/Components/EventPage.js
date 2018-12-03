import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'

class EventPage extends Component {

  render () {
    let usernames = this.props.club.users && this.props.club.users.map(user => <div> <p>{user.first_name} {user.last_name}</p> </div>)
    return (
      <div>
      <UserLinks />
      <h1>{this.props.club.name}</h1>
      <p>date: {this.props.club.date}</p>
      <p>time: {this.props.club.time}</p>
      <p>{this.props.club.description}</p>
      <p>address: {this.props.club.address}, {this.props.club.city}, {this.props.club.state}, {this.props.club.zipcode}</p>
      <p>host: {this.props.club.host && this.props.club.host.first_name}</p>
      <p>Attendees: {usernames}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    club: state.user.club
  }
}

export default connect(mapStateToProps)(EventPage)
