import './App.css';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import Importer from './components/Importer'
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Importer></Importer>
      <Welcome></Welcome>
      <Footer></Footer>
    </React.Fragment>
    
  );
}

export default App;
