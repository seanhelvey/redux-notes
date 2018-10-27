import React from 'react';
import '../App.css';
import Note from './Note';

const Notes = (props) => {
  return (
    <div className="Notes">
      { 
        props.notes.length > 0 ?
        props.notes.map(note => {
          return <Note text={note.text}></Note>
        }) :
        <Note text={"Add some notes"}></Note>
      }
    </div>
  );
}

export default Notes;
