import { loginFetch, signUpFetch, fetchingCurrentUser} from './adapter.js'

export const handleLogin = (user) => ({type: 'HANDLE_LOGIN', payload: {user}})
export const logoutUser = () => ({type: 'HANDLE_LOGOUT', payload: {}})
export const getCurrentUser = (user) => ({type: 'GET_CURRENT_USER', payload: {user}})

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
