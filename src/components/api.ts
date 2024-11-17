import axios from 'axios';

// const API_URL = 'http://localhost:3001';

// export const fetchNotes = () => axios.get(`${API_URL}/notes`);
// export const createNote = (note: { title: string, content: string }) => axios.post(`${API_URL}/notes`, note);
// export const updateNote = (id: number, note: { title: string, content: string }) => axios.put(`${API_URL}/notes/${id}`, note);
// export const deleteNote = (id: number) => axios.delete(`${API_URL}/notes/${id}`);


// frontend/api.ts
const API_URL = 'http://localhost:3000';  // Change this to match Rails backend

export const fetchNotes = () => axios.get(`${API_URL}/notes`);
export const createNote = (note: { title: string, content: string }) => axios.post(`${API_URL}/notes`, note);
export const updateNote = (id: number, note: { title: string, content: string }) => axios.put(`${API_URL}/notes/${id}`, note);
export const deleteNote = (id: number) => axios.delete(`${API_URL}/notes/${id}`);