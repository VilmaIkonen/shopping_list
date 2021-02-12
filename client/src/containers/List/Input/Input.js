import React from 'react';

const Input = ({ className, note, setCompleted }) => {

  return (
    <div onClick={setCompleted}>    
      <p 
      className={className}
      >{note.text}</p>
    </div>
  );
};

export default Input;