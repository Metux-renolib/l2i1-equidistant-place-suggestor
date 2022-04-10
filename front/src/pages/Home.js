import React from 'react';
import Map from '../components/Map';
import Formulaire from '../components/Formulaire';
import '../styles/Home.css';

const Home = () => {
  return (
  <div className='Home'>
    <h1>Commençons ! Veuillez rentrer toutes les informations nécessaires : </h1>
    <Formulaire/>
    <Map/>
  </div>
  );
};

export default Home;

