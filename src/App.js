import React, { Component } from 'react';
import './App.css';

import Notes from './components/Notes'
import AddNoteForm from './components/AddNoteForm'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newNote: "",
      notes: []
    }
  }

  inputChange = (event) => {
    event.preventDefault()
    this.setState({
      newNote: event.target.value
    })
  }

  addNote = (event) => {
    event.preventDefault()
    this.setState({
      notes: this.state.notes.concat({
        text: this.state.newNote
      })
    })
  }

  render() {
    return (
      <div className="App">
        <AddNoteForm inputChange={this.inputChange} addNote={this.addNote}></AddNoteForm>
        <Notes notes={this.state.notes}></Notes>
      </div>
    );
  }
}

export default App;
