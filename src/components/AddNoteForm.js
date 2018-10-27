import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const AddNoteForm = (props) => {
  return (
    <form onSubmit={props.formSubmit}>
      <input onChange={props.inputChange}></input>
      <button>Submit</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  inputChange: (event)=> {
    dispatch({ type: 'EDIT_NOTE', text: event.target.value })
  },
  formSubmit: (event)=> {
    event.preventDefault()
    dispatch({ type: 'ADD_NOTE'})
  },  
})

export default connect(
  null,
  mapDispatchToProps
)(AddNoteForm);