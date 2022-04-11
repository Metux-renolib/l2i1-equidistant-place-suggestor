import React from 'react';
import Map from '../components/Map';
import Formulaire from '../components/Formulaire';
import '../styles/Home.css';

const Home = () => {
  return (
  <div className='Home'>
    <h2>Commençons ! Veuillez rentrer toutes les informations nécessaires des participants : </h2>
    <h3>Une fois votre recherche lancée, appuyez deux fois sur la carte !</h3>
    <Formulaire/>
    <Map/>
  </div>
  );
};

export default Home;

