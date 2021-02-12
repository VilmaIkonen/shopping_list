import * as api from '../api/api'
import { GET_ALL, CREATE_NOTE, TOGGLE_NOTE, DELETE_NOTE } from '../constants/actionConstants';

export const getAll = () => async(dispatch) => {
  try {
    const {data} = await api.getAll();
    dispatch({type: GET_ALL, payload: data})
  } 
  catch (err) {
    console.log('function getAll() ', err);
  }
}

export const createNote = (note) => async(dispatch) => {
  try {
    const {data} = await api.createNote(note);
    dispatch({type: CREATE_NOTE, payload: data});
  } 
  catch (err) {
    console.log('function createNote() ', err)
  }
}

export const toggleNote = (id, note) => async(dispatch) => {
  try {
    const {data} = await api.toggleNote(id, note);
    dispatch({type: TOGGLE_NOTE, payload: data});
  } 
  catch (err) {
    console.log('function toggleNote() ', err)  
  }
}

export const deleteNote = (id) => async(dispatch) => {
  try {
    await api.deleteNote(id);
    dispatch({type: DELETE_NOTE, payload: id});
  } 
  catch (err) {
    console.log('function deleteNote() ', err)
  }
}



