import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrentlyReading from './CurrentlyReading.js'
import UserLinks from './UserLinks.js'
import { Link } from 'react-router-dom'

class UserFeed extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <UserLinks />
      <div className="currentlyreading">
      <h2>Currently Reading</h2>
      <CurrentlyReading />
      </div>

      <p>Create an Event!</p>
      <form>
      <label>Name<input type="text" /><br /></label>
      <label>Location<input type="text" /><br /></label>
      <label>Date<input type="text" /><br /></label>
      <label>Time<input type="text" /><br /></label>
      <label>Description<input type="text" /><br /></label>
      <label>Host<input type="text" /><br /></label>
      <input type="submit"/><br />
      </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

export default connect(mapStateToProps)(UserFeed)
