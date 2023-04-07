import React, { useState } from 'react';
import './keeper.css';

function CreateArea() {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    // console.log(name)
    console.log(value)
  }

  return (
    <>
      <form>
        <input name={note.title} placeholder="Title" onChange={handleChange} />
        <textarea
          name={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateArea;
