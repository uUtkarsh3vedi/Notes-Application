import React from 'react';
import { useNote } from '../context/NoteContext';
import '../styles/Notes.css'; 

const MyNotes = () => {
  const { myNotes } = useNote();
  return (
    <div className="shared-notes-container">
      <h3 className="shared-notes-title">My Notes</h3>
      {myNotes.map((note) => (
        <div className="shared-note-card" key={note._id}>
          <h4 className="shared-note-title">{note?.title}</h4>
          <p className="shared-note-content">{note?.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MyNotes;
