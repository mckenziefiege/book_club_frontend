const initialState = {
  auth: {
    currentUser: {}
  },
  books: {
    read: [],
    wantToRead: [],
    currentlyReading: []
  },
  club: {}
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
      return {...state, want_to_read: [...state.books.want_to_read, action.payload]}
    }

    case('CHANGE_EVENT'): {
      return {...state, club: action.payload.club}
    }

    case('UPDATE_USER'): {
      return {...state, auth: {currentUser: action.payload}}
    }

    case('UPDATE_USER_FROM_JOIN'): {
      console.log(action.payload)
      return {...state, auth: {currentUser: action.payload}}
    }

    case('UPDATE_USER_FROM_FAVORITE'): {
      console.log('in the update!!!')
      console.log(action.payload)
      return {...state, auth: {currentUser: action.payload}, books: {read: action.payload.read, want_to_read: action.payload.want_to_read, currently_reading: action.payload.currently_reading}}
    }



    default:
      return state
  }
}
