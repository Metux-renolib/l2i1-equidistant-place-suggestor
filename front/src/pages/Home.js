import React from 'react';
import Map from '../components/Map';
import Formulaire from '../components/Formulaire';

const Home = () => {
  return (
    <div className='Home'>
      <h2>Commençons ! Veuillez rentrer toutes les informations nécessaires : </h2>
      <Formulaire/>
      <Map/>
    </div>
  );
};

export default Home;

