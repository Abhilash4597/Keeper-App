import React from 'react';
import Header from './Keeper-App/Header';
import Footer from './Keeper-App/Footer';
import Note from './Keeper-App/Note';
import data from './Keeper-App/Data';

function App() {
  return (
    <>
      <Header />
      <Note data={ data } />
      <Footer />
    </>
  );
}

export default App;
