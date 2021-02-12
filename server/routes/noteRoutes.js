import express from 'express';
import { getNotes, createNote } from '../controllers/noteControllers.js';

const router = express.Router();

// path for all notes start .../notes
router.get('/', getNotes) // test: localhost:5000/notes
router.post('/', createNote)

export default router;