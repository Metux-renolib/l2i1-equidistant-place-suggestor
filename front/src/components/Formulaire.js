import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

const  Formulaire = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');

    const handleSubmit = () => {
        const user1 = {
            nom : this.state.name1,
            adresse : this.state.adresse1
        };
        const user2 = {
            nom : this.state.name2,
            adresse : this.state.adresse2
        };
        const user3 = {
            nom : this.state.name2,
            adresse : this.state.adresse2
        };
        const user4 = {
            nom : this.state.name2,
            adresse : this.state.adresse2
        };
        const user5 = {
            nom : this.state.name2,
            adresse : this.state.adresse2
        };
        const user6 = {
            nom : this.state.name2,
            adresse : this.state.adresse2
        };
        axios.post('http://localhost:3000/formulaire', { user1,user2,user3,user4,user5,user6 })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
      }

    return (
        <div id="formulaire">
        <Navigation/>
        <form action="/" method="post">
            <label>Nom 1 :</label>
            <input type='text' name ='name1' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse 1  : </label>
            <input type='text' name ='adresse1' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <label>Nom 2 :</label>
            <input type='text' name ='name2' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse 2  : </label>
            <input type='text' name ='adresse2' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <label>Nom 3 :</label>
            <input type='text' name ='name3' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse 3  : </label>
            <input type='text' name ='adresse3' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <label>Nom 4 :</label>
            <input type='text' name ='name4' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse 4  : </label>
            <input type='text' name ='adresse4' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <label>Nom 5 :</label>
            <input type='text' name ='name5' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse 5  : </label>
            <input type='text' name ='adresse5' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

            <label>Nom 6 :</label>
            <input type='text' name ='name6' onChange={(e) => { setNom(e.target.value);}} placeholder='Rentrez votre nom'/>
            <label>Adresse 6  : </label>
            <input type='text' name ='adresse6' onChange={(e) => { setAdresse(e.target.value);}} placeholder='Rentrez une adresse'/>

        </form>
        <input type="submit" value="Envoyer" />
    </div>
  );
}

export default Formulaire;