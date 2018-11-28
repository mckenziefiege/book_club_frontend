import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.js'
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import HomePage from './Components/HomePage.js'
import UserFeed from './Components/UserFeed.js'
import UserWantToRead from './Components/UserWantToRead.js'
import UserRead from './Components/UserRead.js'
import { connect } from 'react-redux'
import { setAndFetchUser } from './Redux/Actions/userActions.js'

class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.setAndFetchUser(token)
    }
  }

  render() {
      // let want_list = this.props.user.user !== undefined ? this.props.user.user.books.filter(book => book.status === "want to read") : null
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/userfeed" component={UserFeed} />
          <Route path="/read" component={UserRead} />
          <Route path="/books-to-read" component={UserWantToRead} />
          <Route path="/your-events" render={this.renderYourEvents} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAndFetchUser: (token) => dispatch(setAndFetchUser(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
