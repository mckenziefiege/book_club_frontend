import { loginFetch, signUpFetch} from './adapter.js'

export const handleLogin = (user) => ({type: 'HANDLE_LOGIN', payload: {user}})
export const logoutUser = () => ({type: 'HANDLE_LOGOUT', payload: {}})

export const loginAndFetch = (e) => {
  return (dispatch) => {
    return loginFetch(e)
    .then(json => dispatch(handleLogin(json.user)) && localStorage.setItem("token", json.jwt))
  }
}

export const signUpAndFetch = (e) => {
  console.log('inside signup and fetch')
  return (dispatch) => {
    return signUpFetch(e)
    .then(json => dispatch(handleLogin(json.user)) && localStorage.setItem("token", json.jwt))
  }
}
