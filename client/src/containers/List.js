import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNote } from '../actions/actions'
import Input from './Input'

const List = () => {

  const dispatch = useDispatch();
  const notes = useSelector((state)=> state.notes);

  const listToClear = document.getElementById('list');
  const [ list, setList ] = useState(listToClear);

  const clearList = () => {
    const clearedList = document.getElementById('list').innerHTML = '';
    setList(clearedList);
  }
  
  return (
    <div>
      <div id='list'>
        {notes.map((note) => (
          <Input 
          className={note.completed ? 'note line-through' : 'note'}
          key={note.id}
          note={note}
          setCompleted={() => dispatch(toggleNote(note.id, !note.completed ? {completed: true} : {completed: false}))}
          />
        ))}           
      </div>
      <button onClick={clearList}>Poista lista</button>
     </div>
  );
};

export default List;
