import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginAndFetch } from '../Redux/Actions/userActions.js'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginAndFetch(e)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <h4>Login</h4>
      <label>Username <input type="text" name="username"/></label><br />
      <label>Password <input type="text" name="password"/></label><br />
      <input type="Submit" placeholder="Username"/>
      {localStorage.getItem('token') && <Redirect to='/userfeed' />}
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAndFetch: (e) => dispatch(loginAndFetch(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
