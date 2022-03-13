//ce fichier est nécessaire pour faire le lien entre le back et le front
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') //Cette commande va faire pointer root sur le composant App (root se trouve dans le fichier index.html)
);