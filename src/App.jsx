import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import data from './Components/Data';

function App() {
  return (
    <>
      <Header />
      <Note data={data} />
      <Footer />
    </>
  );
}

export default App;
