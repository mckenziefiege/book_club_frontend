const initialState = {
  auth: {
    currentUser: {}
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case('HANDLE_LOGIN'): {
      return {...state, currentUser: action.payload}
    }

    case('HANDLE_LOGOUT'): {
      console.log('in handle logout')
      return {...state, currentUser: action.payload}
    }
    default:
      return state
  }
}
