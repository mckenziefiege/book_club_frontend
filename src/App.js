import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js'
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import HomePage from './Components/HomePage.js'
import EventsContainer from './Components/EventsContainer.js'
import EventCard from './Components/EventCard.js'
import BooksContainer from './Components/BooksContainer.js'
import BookCard from './Components/BookCard.js'
import Logout from './Components/Logout.js'

class App extends Component {


//   handleLogin = (e) => {
//   e.preventDefault()
//   fetch("http://localhost:3000/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       user: {
//         username: e.target.username.value,
//         password: e.target.password.value
//       }
//     })
//   })
//     .then(resp => resp.json())
//     .then(resp => {
//       localStorage.setItem("token", resp.jwt)
//       this.setState({
//         auth: {currentUser: resp.user}
//       })
//     })
// }
//
// handleSignup = (e) => {
//   e.preventDefault()
//   const options = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({ user: {
//       first_name: e.target['first-name'].value,
//       last_name: e.target['last-name'].value,
//       city: e.target.city.value,
//       state: e.target.state.value,
//       username: e.target.username.value,
//       password: e.target.password.value,
//       image: e.target.image.value}
//     })
//   }
//   fetch('http://localhost:3000/users', options)
//     .then(resp => resp.json())
//     .then(resp => {
//       localStorage.setItem("token", resp.jwt)
//       this.setState({
//         auth: {currentUser: resp.user}
//       })
//     })
// }

  render() {
    return (
      <div>
        inside app
        <NavBar />
        <SignUp />
        <Login />
        <HomePage />
        <EventsContainer />
        <EventCard />
        <BooksContainer />
        <BookCard />
        <Logout />
      </div>
    );
  }
}

export default App;
