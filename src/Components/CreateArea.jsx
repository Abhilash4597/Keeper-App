import React, { useState } from 'react';
import './keeper.css';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote(preValue => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    props.onAdd(note);
  }


  return (
    <>
      <form>
        <input name='title' placeholder="Title" onChange={handleChange} />
        <textarea
          name='content'
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </>
  );
}

export default CreateArea;
