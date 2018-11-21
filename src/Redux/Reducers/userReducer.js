const initialState = {
  auth: {
    currentUser: {}
  }
}

export const userReducer = (state = initialState, action) => {
  console.log('IN User REDUCER')
  switch (action.type) {
    default:
      return state
  }
}
