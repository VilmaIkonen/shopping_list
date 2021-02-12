import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from './containers/List/List';
import { getAll, createNote } from './actions/actions';

const App = () => {

  const [ note, setNote ] = useState({ id: '', text: '', completed: false });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createNote(note));
    clearInput();
  }

  const clearInput = () => {
    setNote({text: ''});
  }

  return (
    <div className='container'>
      <h1>Ostoslista</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='text'
          value={note.text}
          onChange={(event) => setNote({...note, text: event.target.value})}
        />
        <button
        type='submit'>
          Lisää
        </button>
      </form>
      <List/>
    </div>
  );
};

export default App;