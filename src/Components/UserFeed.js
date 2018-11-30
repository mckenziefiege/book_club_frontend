import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrentlyReading from './CurrentlyReading.js'
import UserLinks from './UserLinks.js'

class UserFeed extends Component {

    submitNewEvent = (e) => {
      e.preventDefault()
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({
          name: e.target.name.value,
          address: e.target.address.value,
          city: e.target.city.value,
          state: e.target.state.value,
          zip_code: e.target.zipcode.value,
          date: e.target.date.value,
          time: e.target.time.value,
          description: e.target.description.value,
          host_id: this.props.user.id
        })
      }
      fetch('http://localhost:3000/events', options)
      .then(resp => resp.json())
      .then(resp => fetch('http://localhost:3000/user_events', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({
          user_id: this.props.user.id,
          event_id: resp.id
        })
      }))
    }

  render() {
    return (
      <div>
        <UserLinks />
        <div className="currentlyreading">
          <h2>Currently Reading</h2>
          <CurrentlyReading />
        </div>
      <p>Create an Event!</p>
        <form onSubmit={(e) => this.submitNewEvent(e)}>
          <label>Name<input type="text" name="name"/><br /></label>
          <label>Address<input type="text" name="address"/><br /></label>
          <label>City<input type="text" name="city"/><br /></label>
          <label>State<input type="text" name="state"/><br /></label>
          <label>Zip Code<input type="text" name="zipcode"/><br /></label>
          <label>Date<input type="text" name="date"/><br /></label>
          <label>Time<input type="text" name="time"/><br /></label>
          <label>Description<input type="text" name="description"/><br /></label>
          <input type="hidden" name="host"/><br />
          <input className="button" type="submit"/><br />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.auth.currentUser.user
  }
}

export default connect(mapStateToProps)(UserFeed)
