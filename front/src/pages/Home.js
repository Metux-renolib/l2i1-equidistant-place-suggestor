import React from 'react';
import Navigation from '../components/Navigation';
import Map from '../components/Map';
import Formulaire from '../components/Formulaire';

const Home = () => {
  return (
  <div className='Home'>
    <Navigation/>
    <h1>Commençons ! Veuillez rentrez toutes les informations nécessaires : </h1>
    <Formulaire/>
  </div>
  );
};

export default Home;

