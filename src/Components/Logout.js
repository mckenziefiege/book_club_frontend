import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/Actions/userActions.js'
import { withRouter } from "react-router-dom"


class Logout extends Component {

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
      <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: logoutUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout))
