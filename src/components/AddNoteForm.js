import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class AddNoteForm extends Component {
  render() {
    return (
      <form>
        <input onChange={this.props.onChange}></input>
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputChange: event => dispatch({ type: 'NOTE_CHANGE', text: event.target.value })
})

export default connect(
  null,
  mapDispatchToProps
)(AddNoteForm);
