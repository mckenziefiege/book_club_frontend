const initialState = {
  events: []
}

export const eventReducer = (state = initialState, action) => {
  console.log('IN EVENT REDUCER')
  switch (action.type) {
    default:
      return state
  }
}
