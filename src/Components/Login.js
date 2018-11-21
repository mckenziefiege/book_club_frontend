import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div>
      <form>
      <h4>Login</h4>
      <label>Username <input type="text" name="username"/></label><br />
      <label>Password <input type="text" name="password"/></label><br />
      <input type="Submit" placeholder="Username"/>
      </form>
      </div>
    )
  }
}

export default Login
