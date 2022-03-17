import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

const  Formulaire = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');

    const handleSubmit = () => {
        const user1 = {
            nom : state.name1,
            adresse : state.adresse1
        };
        const user2 = {
            nom : state.name2,
            adresse : state.adresse2
        };
        const user3 = {
            nom : state.name3,
            adresse : state.adresse3
        };
        const user4 = {
            nom : state.name4,
            adresse : state.adresse4
        };
        const user5 = {
            nom : state.name5,
            adresse : state.adresse5
        };
        const user6 = {
            nom : state.name6,
            adresse : state.adresse6
        };
        axios.post('http://localhost:3000/formulaire', { user1,user2,user3,user4,user5,user6 })
            .then(res => {
                console.log(res);
            })
      }

    return (
        <div id="formulaire">
        <Navigation/>
        <form action="/" method="post">

            <label>Nom 1 :</label>
            <input type='text' name ='name1' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez un nom'/>
            <label>Adresse 1  : </label>
            <input type='text' name ='adresse1' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <br/>

            <label>Nom 2 :</label>
            <input type='text' name ='name2' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez un nom'/>
            <label>Adresse 2  : </label>
            <input type='text' name ='adresse2' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <br/>

            <label>Nom 3 :</label>
            <input type='text' name ='name3' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez un nom'/>
            <label>Adresse 3  : </label>
            <input type='text' name ='adresse3' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <br/>

            <label>Nom 4 :</label>
            <input type='text' name ='name4' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez un nom'/>
            <label>Adresse 4  : </label>
            <input type='text' name ='adresse4' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <br/>

            <label>Nom 5 :</label>
            <input type='text' name ='name5' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez un nom'/>
            <label>Adresse 5  : </label>
            <input type='text' name ='adresse5' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <br/>

            <label>Nom 6 :</label>
            <input type='text' name ='name6' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez un nom'/>
            <label>Adresse 6  : </label>
            <input type='text' name ='adresse6' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

        </form>
        <input type="submit" value="Envoyer" onClick={handleSubmit} />
    </div>
  );
}

export default Formulaire;