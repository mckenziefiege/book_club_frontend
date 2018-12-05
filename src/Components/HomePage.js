import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <div id="welcomemessage">
          <h1>Welcome to Book Club!</h1>
          <p>Join a community where you can attend book clubs in your area and keep track of what your reading.</p>
        </div>
      </div>
    )
  }
}

export default HomePage
