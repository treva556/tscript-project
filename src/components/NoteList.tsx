
import React, { useEffect, useState } from 'react';
import { fetchNotes } from './api';
import { Note } from './types';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes().then(response => setNotes(response.data));
  }, []);

  // Define onEdit and onDelete functions
  const handleEditNote = (note: Note) => {
    // Logic to edit the note, such as showing a form
    console.log('Editing note:', note);
  };

  const handleDeleteNote = (noteId: number) => {
    // Logic to delete the note, e.g., updating the state or calling an API
    console.log('Deleting note with ID:', noteId);
    setNotes(notes.filter(note => note.id !== noteId));
  };

  return (
    <div className="flex flex-col items-center justify-start p-4 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Notes</h1>
      
      {/* Note Form (if needed) */}
      <NoteForm onNoteAdded={() => fetchNotes().then(response => setNotes(response.data))} />
      
      <div className="w-full max-w-2xl space-y-4">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={handleEditNote}  // Pass handleEditNote function
            onDelete={handleDeleteNote}  // Pass handleDeleteNote function
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;