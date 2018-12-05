import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrentlyReading from './CurrentlyReading.js'
import UserLinks from './UserLinks.js'

class UserFeed extends Component {

  state ={
    formClicked: false
  }

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
          zipcode: e.target.zipcode.value,
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

    changeFormClicked = () => {
      this.setState({
        formClicked: !this.state.formClicked
      })
    }

    renderForm() {
      return (
      <form className="eventForm" onSubmit={(e) => this.submitNewEvent(e)}>
        <label>Name of Book Club<input className="eventFormInput" type="text" name="name"/><br /></label>
        <label>Address<input className="eventFormInput" type="text" name="address"/><br /></label>
        <label>City<input className="eventFormInput"type="text" name="city"/><br /></label>
        <label>State<input className="eventFormInput" type="text" name="state"/><br /></label>
        <label>Zip Code<input className="eventFormInput" type="text" name="zipcode"/><br /></label>
        <label>Date<input className="eventFormInput" type="text" name="date" placeholder="mm/dd/yyyy"/><br /></label>
        <label>Time<input className="eventFormInput" type="text" name="time" placeholder="-- : -- am/pm"/><br /></label>
        <label>Description <br /><textarea rows="4" cols="50" className="eventFormInput" type="text" name="description"></textarea><br /></label>
        <input type="hidden" name="host"/><br />
        <input className="button" type="submit"/><br />
      </form>
      )
    }



  render() {
    return (
      <div>
        <UserLinks />
        <div className="currentlyreading">
          <h1>Welcome {this.props.user && this.props.user.first_name}!</h1>
          <h2 onClick={this.changeFormClicked}>Click Here to Create a New Book Club!</h2>
          {this.state.formClicked ? this.renderForm() : null}
          <h2>Books Currently Reading: </h2>
          <CurrentlyReading />
        </div>
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
