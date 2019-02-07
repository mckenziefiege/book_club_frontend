export const handleLogin = (user) => ({type: 'HANDLE_LOGIN', payload: {user}})

export const logoutUser = () => ({type: 'HANDLE_LOGOUT'})

export const getCurrentUser = (user) => ({type: 'GET_CURRENT_USER', payload: {user}})

export const updateCurrentlyReading = (book) => ({type: 'UPDATE_CURRENTLY_READING', payload: {book}})

export const updateWantToRead = (book) => ({type: 'UPDATE_WANT_TO_READ', payload: {book}})

export const updateRead = (book) => ({type: 'UPDATE_READ', payload: {book}})

export const addBookToWantToRead = (book) => ({type: 'ADD_BOOK_TO_WANT_TO_READ', payload: {book}})

export const changeEvent = (club) => ({type: 'CHANGE_EVENT', payload: {club}})

export const updateUser = (user) => ({type: 'UPDATE_USER', payload: {user}})

export const updateUserFromJoin = (user) => ({type: 'UPDATE_USER_FROM_JOIN', payload: {user}})

export const updateUserFromFavorite = (user) => ({type: 'UPDATE_USER_FROM_FAVORITE', payload: {user}})

export const loginAndFetch = (e) => {
  return (dispatch) => {
    return loginFetch(e)
    .then(json => dispatch(handleLogin(json.user)) && localStorage.setItem("token", json.jwt))
  }
}

export const signUpAndFetch = (e) => {
  return (dispatch) => {
    return signUpFetch(e)
    .then(json => dispatch(handleLogin(json.user)) && localStorage.setItem("token", json.jwt))
  }
}

export const setAndFetchUser = (token) => {
  return (dispatch) => {
    return fetchingCurrentUser(token)
    .then(json => dispatch(getCurrentUser(json.user)))
  }
}

export const loginFetch = (e) => {
  return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: e.target.username.value,
          password: e.target.password.value
        }
      })
    }).then(resp => resp.json())
}

export const signUpFetch = (e) => {
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
        first_name: e.target.firstname.value,
        last_name: e.target.lastname.value,
        city: e.target.city.value,
        state: e.target.state.value,
        image: e.target.image.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
      })
    }).then(resp => resp.json())
}

export const fetchingCurrentUser = (token) => {
  return fetch('http://localhost:3000/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(resp => resp.json())
}
