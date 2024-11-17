import React from 'react';
import { Note } from './types'

interface NoteItemProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;