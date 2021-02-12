import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  id: Number,
  text: String,
  completed: Boolean
});

const NoteMessage = mongoose.model('NoteMessage', noteSchema);

export default NoteMessage; // --> export mongoose model, which will be used for delete, toggle etc functionalities