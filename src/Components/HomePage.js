import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {

  render() {
    return (
      <div>
      <Link to="/login"><button> Login </button></Link>
      <Link to="/signup"><p>Sign Up</p></Link>
      </div>
    )

  }

}

export default HomePage
