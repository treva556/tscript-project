// src/components/NoteForm.tsx
import React, { useState } from 'react';
import { createNote } from './api';

const NoteForm = ({ onNoteAdded }: { onNoteAdded: () => void }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !content) {
      alert("Please provide both title and content!");
      return;
    }

    try {
      await createNote({ title, content });
      setTitle('');
      setContent('');
      onNoteAdded(); // Notify parent to refresh the notes list
    } catch (error) {
      console.error('Error creating note:', error);
      alert('Failed to create note');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;