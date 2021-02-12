import { GET_ALL, CREATE_NOTE, TOGGLE_NOTE, DELETE_NOTE } from '../constants/actionConstants';

export default (notes = [], action) => {
  
  switch (action.type) {
    case GET_ALL:
      return action.payload;
    case CREATE_NOTE:
      return [...notes, action.payload];
    case TOGGLE_NOTE:
      return notes.map((note) => (note.id === action.payload.id ? action.payload : note));
    case DELETE_NOTE:
      return notes.filter((note) => note.id !== action.payload.id ? action.payload : note); // filter: go through all ids, make new array with all that IS NOT action.payload. "Pushes" the filtered out from the array
    default: return notes;
  }
  
};




