import './App.css';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import Importer from './components/Importer'
import Ted from './components/Ted/Ted'
import React from 'react';
import Speaker from './components/Speaker/Speaker';
import SpeakerHeading from './components/Speaker/SpeakerHeading';
import Team from './components/Team/Team'
import left_image from './assets/images/left-image.jpeg'


function App() {
  return (
    <React.Fragment>
      <Importer></Importer>
      <Welcome></Welcome>
      <Ted></Ted>
      <SpeakerHeading></SpeakerHeading>
      <Speaker side='1' speaker='Speaker name' about='Stuff about speaker to be written here' source={left_image} ></Speaker>
      <Speaker side='0' speaker='Speaker name' about='Stuff about speaker to be written here' source={left_image}></Speaker>
      <Team></Team>
      <Footer></Footer>
      
    </React.Fragment>
    
  );
}

export default App;
