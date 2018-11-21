const initialState = {
  books: []
}

export const bookReducer = (state = initialState, action) => {
  console.log('IN BOOK REDUCER')

  switch (action.type) {
    default:
      return state
  }
}
