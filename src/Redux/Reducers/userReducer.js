const initialState = {
  auth: {
    currentUser: {}
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case('HANDLE_LOGIN'): {
      return {...state, auth: {currentUser: action.payload}}
    }

    case('HANDLE_LOGOUT'): {
      return {...state, auth: {currentUser: {}} }
    }

    case('GET_CURRENT_USER'): {
      return {...state, auth: {currentUser: action.payload}}
    }

    default:
      return state
  }
}
