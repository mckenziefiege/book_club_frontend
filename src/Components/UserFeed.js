import React, { Component } from 'react';
import { connect } from 'react-redux'
import BooksContainer from './BooksContainer.js'
import CurrentlyReading from './CurrentlyReading.js'
import { Link } from 'react-router-dom'

class UserFeed extends Component {
  render() {

    return (
      <div>
      <BooksContainer />
      <p>Logged in as: {this.props.user.user && this.props.user.user.first_name}</p>
      <Link to='/read'><p>{"Books You've Read"}</p></Link>
      <Link to='books-to-read'><p>{"Reading List"}</p></Link>
      <Link to='your-events'><p>{"Your Events"}</p></Link>

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
