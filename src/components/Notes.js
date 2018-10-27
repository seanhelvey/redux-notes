import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Note from './Note';

const Notes = (props) => {
  return (
    <div className="Notes">
      { 
        props.notes.length > 0 ?
        props.notes.map(note => {
          return <Note key={note} text={note.text}></Note>
        }) :
        <Note text={"Add some notes"}></Note>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(
  mapStateToProps
)(Notes);
