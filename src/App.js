import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes'
import AddNoteForm from './components/AddNoteForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddNoteForm></AddNoteForm>
        <Notes></Notes>
      </div>
    );
  }
}

export default App;
