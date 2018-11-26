import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/Actions/userActions.js'

class Logout extends Component {

  handleLogout = () => {
    localStorage.removeItem("token")
    console.log(localStorage)
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
      <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: logoutUser
  }
}

export default connect(null, mapDispatchToProps)(Logout)
