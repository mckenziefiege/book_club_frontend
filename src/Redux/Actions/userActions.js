// const handleLogout = () => {(type: 'HANDLE_LOGOUT'), payload: {}}
import { loginFetch } from './adapter.js'

export const handleLogin = (user) => ({type: 'HANDLE_LOGIN', payload: {user}})

export const loginAndFetch = (e) => {
  console.log('hellllllo', e)
  return (dispatch) => {
    return loginFetch(e)
    .then(json => dispatch(handleLogin(json.user)))
  }
}


//         localStorage.setItem("token", resp.jwt)
//         this.setState({
//          auth: {currentUser: resp.user}
