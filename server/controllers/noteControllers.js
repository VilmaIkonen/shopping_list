// Handlers for the routes (route logic):
import NoteMessage from '../models/noteMessage.js';

export const getNotes = async (req, res) => {
  try {
    const noteMessages = await NoteMessage.find();
    res.status(200).json(noteMessages);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const createNote = async (req, res) => {

  const note = res.body; // const body = res.body
  const newNote = new NoteMessage(note) // call new PostMessage with the value(note) that is received from the request

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } 
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}