import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    newNote: "",
    notes: [{
        text: "yo"
    }]
}

function reducer(state = initialState, action) {
    console.log("reducer", action)
    switch(action.type) {
      case 'EDIT_NOTE':
        return {
          newNote: action.text,
          notes: state.notes
        };
      case 'ADD_NOTE':
        return {
          newNote: state.newNote,
          notes: state.notes.concat({
              text: state.newNote
          })
        };
      default:
        return state;
    }
  }

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
