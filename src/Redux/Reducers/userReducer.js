const initialState = {
  auth: {
    currentUser: {}
  }
}

export const userReducer = (state = initialState, action) => {
  console.log('IN User REDUCER')
  switch (action.type) {
    case('HANDLE_LOGIN'): {
      return {...state, currentUser: action.payload}
    }
    default:
      return state
  }
}
