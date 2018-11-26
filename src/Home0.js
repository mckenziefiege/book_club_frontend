import React, { Component } from 'react'
import { Segment, Button, Divider, Container } from 'semantic-ui-react'
import '../Home.css';
import { Link } from 'react-router-dom'

class Home extends Component {

 render() {

   return (
     <div className="homepage">
       <h1 className="logo">Event Planner</h1>
       <Container className="homepagebox" textAlign='center'>
       <Segment id="loginbox">
       <div className="loginsignup">
       <Link to="/login"><Button primary fluid>Login</Button></Link>
       <Divider horizontal>Or</Divider>
       <Link to="/signup"><Button secondary fluid>Sign Up</Button></Link>
       </div>
       </Segment>
       </Container>
     </div>
   )
 }
}

export default Home;
