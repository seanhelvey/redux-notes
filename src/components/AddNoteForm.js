import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = (dispatch) => ({
  inputChange: (event) => {
    dispatch({ type: 'EDIT_NOTE', text: event.target.value })
  },
  formSubmit: (event) => {
    event.preventDefault()
    dispatch({ type: 'ADD_NOTE' })
  },  
})

export default connect(
  null,
  mapDispatchToProps
)(AddNoteForm);
