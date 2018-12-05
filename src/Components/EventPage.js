import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLinks from './UserLinks.js'
import CommentsContainer from './CommentsContainer.js'

class EventPage extends Component {

  render () {
    let usernames = this.props.club.users && this.props.club.users.map(user => <div> <p>{user.first_name} {user.last_name}</p> </div>)
    return (
      <div>
        <UserLinks />
        <div className="eventPageContainer">
          <div className="eventPagecol1">
            <h1>{this.props.club.name}</h1>
            <p>Host: {this.props.club.host && this.props.club.host.first_name}</p>
            <p><i class="far fa-calendar-alt"></i>  {this.props.club.date}</p>
            <p><i class="far fa-clock"></i>  {this.props.club.time}</p>
            <p><i class="fas fa-map-marker-alt"></i>  {this.props.club.address}, {this.props.club.city}, {this.props.club.state}, {this.props.club.zipcode}</p>
            <p>{this.props.club.description}</p>
            <p>Attendees: {usernames}</p>
          </div>
            <div className="eventPagecol2">
              <CommentsContainer />
            </div>
        </div>
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
