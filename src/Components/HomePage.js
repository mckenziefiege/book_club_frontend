import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <div className="welcomemessage">
          <h1>Welcome!</h1>
          <p>Join a community where you can attend book clubs in your area and keep track of what your reading!</p>
        </div>
          {/*<div>
            <Link to="/login"><p> Login </p></Link>
            <Link to="/signup"><p>Sign Up</p></Link>
          </div>*/}
      </div>
    )
  }
}

export default HomePage
