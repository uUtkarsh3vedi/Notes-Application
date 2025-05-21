import { useNote } from '../context/NoteContext';
import '../styles/Notes.css';

const SharedNotes = () => {
  const { sharedNotes } = useNote();

  return (
    <div className="shared-notes-container">
      <h3 className="shared-notes-title">Notes Shared With Me</h3>
      {sharedNotes.map((note) => (
        <div className="shared-note-card" key={note._id}>
          <h4 className="shared-note-title">Title-{note.title}</h4>
          <p className="shared-note-content">Content-{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SharedNotes;
