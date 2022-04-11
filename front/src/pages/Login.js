import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css'
import Header from './Header';

async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

async function registerUser(credentials) {
    return fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmitLogin = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
        if(token.token === 'erreur'){
          alert('Nom ou mot de passe incorrect')
        }
        else{
          setToken(token);
        }
  }

  const handleSubmitRegister = async e => {
    e.preventDefault();
    const token = await registerUser({
      username,
      password
    });
    setToken(token);
  }


  return (
    <div className='log-container container'>
            <form onSubmit={handleSubmitLogin} className="log-form">
              <label>Connexion</label>
                <label>Nom d'utilisateur :</label>
                <input type="text" onChange={e => setUserName(e.target.value)}/>

                <label>Mot de passe :</label>
                <input type="password" onChange={e => setPassword(e.target.value)}/>

                <div className='submit-btn'>
                    <button type="submit">Se connecter</button>
                </div>
            </form>
            <form onSubmit={handleSubmitRegister} className="log-form">
              <label>Inscription</label>
                <label>Nom d'utilisateur :</label>
                <input type="text" onChange={e => setUserName(e.target.value)}/>

                <label>Mot de passe :</label>
                <input type="password" onChange={e => setPassword(e.target.value)}/>

                <div className='submit-btn'>
                    <button type="submit">S'inscrire</button>
                </div>
            </form>
            </div>
  );
};

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }