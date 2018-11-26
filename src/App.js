import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js'
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import HomePage from './Components/HomePage.js'
import EventsContainer from './Components/EventsContainer.js'
import EventCard from './Components/EventCard.js'
import BooksContainer from './Components/BooksContainer.js'
import Logout from './Components/Logout.js'
import UserBooks from './Components/UserBooks.js'
import UserFeed from './Components/UserFeed.js'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {


  componentDidMount () {
    fetch('')
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/userfeed" component={UserFeed}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
