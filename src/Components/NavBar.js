import React, { Component } from 'react';
import '../App.css';
import Logout from './Logout.js'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  renderProfileButton = () => {
    return <Link to='/profile'><li>Profile</li></Link>
  }

  renderHomeButton = () => {
    return <Link to='/'><li>Home</li></Link>
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

  render() {
    return (
      <div>
        <ul>
        {this.renderHomeButton()}
        {localStorage.getItem('token') && this.renderProfileButton()}
        {localStorage.getItem('token') ? this.renderLogoutButton() : this.renderLoginButton()}
        {!localStorage.getItem('token') && this.renderSignUpButton()}
        </ul>
      </div>
    )

  }

}

export default NavBar
