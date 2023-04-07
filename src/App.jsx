import React, { useState } from 'react';
import './Components/Keeper.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import CreateArea from './Components/CreateArea';

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addNote(note) {
    setAllNotes(preNote => {
      return [...preNote, note];
    });
  }

  function deleteNote() {}

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {allNotes.map((allItem, id) => {
        return (
          <Note
            key={id}
            title={allItem.title}
            content={allItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
