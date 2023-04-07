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

  function deleteNote(id) {
    setAllNotes(preNote => {
      return preNote.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-container">
        {allNotes.map((allItem, id) => {
          return (
            <Note
              key={id}
              title={allItem.title}
              content={allItem.content}
              onDelete={deleteNote}
              id={id}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
