import React, { Component } from 'react';
import '../App.css';
import Logout from './Logout.js'

class NavBar extends Component {

  render() {
    return (
      <div>
      <ul>
      <li>Home</li>
      <li>Profile</li>
      <li>Events Near You</li>
      <li><Logout /></li>
      </ul>
      </div>
    )

  }

}

export default NavBar
