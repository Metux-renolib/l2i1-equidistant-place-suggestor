import {React, useState} from 'react';
import Navigation from '../components/Navigation';



const Home = () => {
  const [msg, setMsg] = useState('')

  const handleClick = async () => {
    const data = await window.fetch('/api')
    const json = await data.json()
    console.log(json)
    setMsg(json.msg)
  }
  return (
  <div className='Home'>
    <Navigation/>
    <h1>Accueil</h1>
    <button onClick={handleClick}> 
      Bonjour
    </button>
    <p>
     {msg}
    </p>
  </div>
  );
};

export default Home;

