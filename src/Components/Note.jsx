import React from 'react';
import './keeper.css';

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick} className='delete'>-</button>
      </div>
    </>
  );
}
