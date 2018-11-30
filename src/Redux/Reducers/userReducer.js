const initialState = {
  auth: {
    currentUser: {}
  },
  books: {
    read: [],
    wantToRead: [],
    currentlyReading: []
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case('HANDLE_LOGIN'): {
      return {...state, auth: {currentUser: action.payload}, books: {read: action.payload.user.read, want_to_read: action.payload.user.want_to_read, currently_reading: action.payload.user.currently_reading}}
    }

    case('HANDLE_LOGOUT'): {
      return {...state, auth: {currentUser: {}}, books: {read: {}, want_to_read: {}, currently_reading: {}}}
    }

    case('GET_CURRENT_USER'): {
      return {...state, auth: {currentUser: action.payload}, books: {read: action.payload.user.read, want_to_read: action.payload.user.want_to_read, currently_reading: action.payload.user.currently_reading}}
    }

    case('UPDATE_CURRENTLY_READING'): {
      return {...state, currently_reading: action.payload}
    }

    case('UPDATE_WANT_TO_READ'): {
      return {...state, want_to_read: action.payload}
    }

    case('UPDATE_READ'): {
      return {...state, read: action.payload}
    }

    case('ADD_BOOK_TO_WANT_TO_READ'): {
      console.log('in add book')
      console.log('want to read', state.books.want_to_read)
      console.log('payload', action.payload)
      return {...state, want_to_read: [...state.books.want_to_read, action.payload]}
    }

    default:
      return state
  }
}
