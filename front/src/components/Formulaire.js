import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const  Formulaire = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [data, setData] = useState('')

    const affiche = () =>{
        alert(
        nom + 'a bien été enregistré(e) à cette adresse : '+ adresse
        );
    }
    const handleClick = () => {
        affiche()
        nouveau()
        /*fetch('http://localhost:5000/api',{ 
            mode : 'no-cors'})
            .then(res => res.json())
            .then(data => setData(data.message))
        const data = await window.fetch('/api')
        const json = await data.json()
        console.log(json)
        setMsg(json.msg)*/
      }

    return (
        <div id="formulaire">
        <Navigation/>
        <form action="/" method="post">
            <label>Nom :</label>
            <input type='text' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse : </label>
            <input type='text' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>
        </form>
        <input type="submit" value="Envoyer" onClick={handleClick} />
        <p>{data}</p>
    </div>
  );
}

export default Formulaire;