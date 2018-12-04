import { loginFetch, signUpFetch, fetchingCurrentUser} from './adapter.js'

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
