import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmitLogin = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      console.log(token)
        if(token.token === 'erreur'){
          alert('Nom ou mot de passe incorrect')
        }
        else{
          setToken(token);
        }
    }
  const handleSubmitRegister = async e => {
    
  }


  return (
    <div>
      <form onSubmit={handleSubmitLogin}>
          <label>
              <h3>Connexion</h3>
              <p>Nom</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
              <p>Mot de passe</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
              <button type="submit">Se connecter</button>
          </div>
      </form>
      <form onSubmit={handleSubmitRegister}>
    <label>
          <h3>Inscription</h3>
          <p>Nom</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
          <p>Mot de passe</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
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