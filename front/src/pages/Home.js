import {React, useState} from 'react';
import Navigation from '../components/Navigation';
import Map from '../components/Map';

const Home = () => {
  return (
  <div className='Home'>
    <Navigation/>
    <h1>Accueil</h1>
    <Map/>
  </div>
  );
};

export default Home;

