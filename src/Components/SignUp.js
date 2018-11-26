import React, { Component } from 'react';
import { signUpAndFetch } from '../Redux/Actions/userActions.js'
import { connect } from 'react-redux'

class SignUp extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hitting handle submit')
    this.props.signUpAndFetch(e)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <h4>Sign Up</h4>
      <label>First Name<input type="text" name="firstname"/></label><br />
      <label>Last Name<input type="text" name="lastname" /></label><br />
      <label>City<input type="text" name="city" /></label><br />
      <label>State<input type="text" name="state" /></label><br />
      <label>Profile Photo<input type="text" name="image" /></label><br />
      <label>Username<input type="text" name="username" /></label><br />
      <label>Password<input type="text" name="password"/></label><br />
      <input type="Submit" placeholder="Username"/>
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
    signUpAndFetch: (e) => dispatch(signUpAndFetch(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
