import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') //Cette commande va faire pointer root sur le composant App (root se trouve dans le fichier index.html)
);