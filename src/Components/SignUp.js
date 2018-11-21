import React, { Component } from 'react';

class SignUp extends Component {

  render() {
    return (
      <div>
      <form>
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

export default SignUp
