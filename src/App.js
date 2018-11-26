import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import HomePage from './Components/HomePage.js'
import UserFeed from './Components/UserFeed.js'
import { connect } from 'react-redux'
import { setAndFetchUser } from './Redux/Actions/userActions.js'

class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.setAndFetchUser(token)
    }
  }

  renderBooksRead () {
    return 'books read'
  }

  renderBooksToRead () {
    return 'books to read'
  }

  renderYourEvents () {
    return 'your events'
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={UserFeed} />
          <Route path="/read" render={this.renderBooksRead} />
          <Route path="/books-to-read" render={this.renderBooksToRead} />
          <Route path="/your-events" render={this.renderYourEvents} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: () => dispatch(setAndFetchUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
