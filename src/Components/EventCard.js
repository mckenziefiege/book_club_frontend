import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeEvent, updateUser, updateUserFromJoin } from '../Redux/Actions/userActions.js'

class EventCard extends Component {

  joinEvent = (e, obj) => {
    fetch('http://localhost:3000/user_events', {
      method: "POST",
      headers: {
           "Content-Type": "application/json"
        },
      body: JSON.stringify({
        user_id: this.props.user.id,
        event_id: obj.id
      })
    }).then(resp => resp.json())
    .then(resp => console.log('in join event', resp) || this.props.updateUserFromJoin(resp.user))
  }

  leaveEvent = (e, obj) => {
    console.log('the obj in leave event', obj)
    let user_event = obj.user_events.filter(user_event => user_event.user_id === this.props.user.id)
    console.log('the user event in leave event', user_event)
    let id = user_event.length === 0 ? null : user_event[0].id
    fetch(`http://localhost:3000/user_events/${id}`, {
      method: "DELETE",
      headers: {
           "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
      .then(resp => this.props.updateUser(resp))
  }


  render() {
    console.log(this.props.clubObj)
    let ids = this.props.user.user_events === undefined ? null : this.props.user.user_events.map(user_event => user_event.event_id)
    console.log('ids', ids)
    return (
    <div className="searcheventcard">

    {}

      {ids.includes(this.props.clubObj.id) ? <button onClick={(e) => this.leaveEvent(e, this.props.clubObj)}>Leave Event</button> : <button onClick={(e) => this.joinEvent(e, this.props.clubObj)}>Join Event!</button>}
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
    changeEvent: (resp) => dispatch(changeEvent(resp)),
    updateUser: (resp) => dispatch(updateUser(resp)),
    updateUserFromJoin: (resp) => dispatch(updateUserFromJoin(resp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)
