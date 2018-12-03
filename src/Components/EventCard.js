import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeEvent } from '../Redux/Actions/userActions.js'

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
    console.log(this.props)
    let ids = this.props.user.user_events.map(user_event => user_event.event_id)
    return (
    <div className="searcheventcard">
      {ids.includes(this.props.clubObj.id) ? null : <button onClick={(e) => this.joinEvent(e, this.props.clubObj)}>Join Event!</button>}
      <Link to='/event-page'><p onClick={() => this.props.changeEvent(this.props.clubObj)}>{this.props.clubObj.name}</p></Link>

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

const mapDispatchToProps = (dispatch) => {
  return {
    changeEvent: (resp) => dispatch(changeEvent(resp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)
