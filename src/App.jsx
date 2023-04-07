import React from 'react';
import './Components/Keeper.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import data from './Components/Data';
import CreateArea from './Components/CreateArea';

function App() {
  return (
    <>
      <Header />
      <CreateArea />
      <Note data={data} />
      <Footer />
    </>
  );
}

export default App;
