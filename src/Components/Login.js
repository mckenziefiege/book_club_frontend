import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginAndFetch } from '../Redux/Actions/userActions.js'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginAndFetch(e)
    .then(this.props.history.push("/userfeed"))
  }

  renderLoginForm = () => {
    return (
    <div className="loginform">
    <h2>Log in</h2>
    <form onSubmit={this.handleSubmit}>
    <input type="text" name="username" placeholder="username"/><br />
    <input type="password" name="password" placeholder="password"/><br />
    <input type="Submit" placeholder="Username"/>
    </form>
    </div> )
  }

  render() {
    return (
      <div>
        {localStorage.getItem('token') ? <Redirect to='/profile' /> : this.renderLoginForm() }
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
