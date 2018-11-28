import React, { Component } from 'react';
import '../App.css';
import Logout from './Logout.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {

  renderProfileButton = () => {
    return <Link to='/userfeed'><li>Profile</li></Link>
  }

  renderLogoutButton = () => {
    return <li><Logout /></li>
  }

  renderLoginButton = () => {
    return <Link to='/login'><li>Login</li></Link>
  }

  renderSignUpButton = () => {
    return <Link to='/signup'><li>Sign Up</li></Link>
  }

  renderProfileImage = () => {
    return <li><img className="profileimage" height="50" src={this.props.user.user && this.props.user.user.image} alt="Avatar"/></li>
  }

  render() {
    return (
      <div>
        <ul>
        <Link to='/'><h1 className="logo">Book Club</h1></Link>
        {localStorage.getItem('token') && this.renderProfileImage()}
        {localStorage.getItem('token') && this.renderProfileButton()}
        {localStorage.getItem('token') ? this.renderLogoutButton() : this.renderLoginButton()}
        {!localStorage.getItem('token') && this.renderSignUpButton()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.auth.currentUser}
}

export default connect(mapStateToProps)(NavBar)
