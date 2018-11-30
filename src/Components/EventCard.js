import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class EventCard extends Component {

  joinEvent = (e, obj) => {
    console.log(e.target)
    fetch('http://localhost:3000/user_events', {
      method: "POST",
      headers: {
           "Content-Type": "application/json"
        },
      body: JSON.stringify({
        user_id: this.props.user.id,
        event_id: obj.id
      })
    })
  }

  render() {
    let ids = this.props.user.user_events.map(user_event => user_event.event_id)
    return (
    <div className="searcheventcard">
      {ids.includes(this.props.clubObj.id) ? null : <button onClick={(e) => this.joinEvent(e, this.props.clubObj)}>Join Event!</button>}
      <Link to='/'><p>{this.props.clubObj.name}</p></Link>

      <p>{this.props.clubObj.date}</p>
      <p>{this.props.clubObj.time}</p>
      <p>{this.props.clubObj.description}</p>
      <p>{this.props.clubObj.address}</p>
      <p>{this.props.clubObj.city}</p>
      <p>{this.props.clubObj.state}</p>
      <p>{this.props.clubObj.zipcode}</p>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.auth.currentUser.user
  }
}

export default connect(mapStateToProps)(EventCard)
