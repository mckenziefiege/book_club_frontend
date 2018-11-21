import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { bookReducer } from './Redux/Reducers/bookReducer'
import { eventReducer } from './Redux/Reducers/eventReducer'
import { userReducer } from './Redux/Reducers/userReducer'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  books: bookReducer,
  events: eventReducer,
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
