import axios from 'axios';

const baseUrl = 'http://localhost:5000/notes';

export const getAll = () => axios.get(baseUrl);

export const createNote = (newNote) => axios.post(baseUrl, newNote); // .post(where, what)

export const toggleNote = (id, toggledNote) => axios.patch(`${baseUrl}/${id}`, toggledNote); 

export const deleteNote = (id) => axios.delete(`${baseUrl}/${id}`);

