import React, { Component } from 'react';
import '../App.css';

class AddNoteForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form onSubmit={this.props.addNote}>
        <input onChange={this.props.inputChange}></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddNoteForm;
