import { useState } from 'react';
import axios from 'axios';
import Geocode from "react-geocode";
import SearchLocationInput from './SearchLocationInput';
function Formulaire() {

    const [inputFields, setInputFields] = useState([
        {name: '', adresse: '', disponibilité: ''}
    ]);

    const [jours, setJours] = useState({
      lundi : 0,
      mardi : 0,
      mercredi : 0,
      jeudi : 0,
      vendredi : 0,
      samedi : 0,
      dimanche : 0
    })

    const handleFormChange = (index,event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { name: '', adresse: '' , disponibilité: ''};
        setInputFields([...inputFields, newfield]);
    }

    const dispo = () =>{ 
      const final = []
      for (let i = 0; i<inputFields.length ; i++){
        const str = inputFields[i].disponibilité.split('-',7);
        var keepdispo = 0;
        for(let j = 0; j<str.length ; j++){
          if(str[j]==='lundi' || str[j]==='Lundi'){
            jours.lundi++;
            keepdispo++;
          }
          if(str[j]==='mardi' || str[j]==='Mardi'){
            jours.mardi++;
            keepdispo++;
          }
          if(str[j]==='mercredi' || str[j]==='Mercredi'){
            jours.mercredi++;
            keepdispo++;
          }
          if(str[j]==='jeudi' || str[j]==='Jeudi'){
            jours.jeudi++;
            keepdispo++;
          }
          if(str[j]==='vendredi' || str[j]==='Vendredi'){
            jours.vendredi++;
            keepdispo++;
          }
          if(str[j]==='samedi' || str[j]==='Samedi'){
            jours.samedi++;
            keepdispo++;
          }
          if(str[j]==='dimanche' || str[j]==='Dimanche'){
            jours.dimanche++;
            keepdispo++;
          }
        }
        if(keepdispo !== str.length){
          alert('Erreur : veuillez rentrer un jour valable');
          console.error('erreur');
          inputFields[i].disponibilité = undefined;
          return final;
        }
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.lundi){
        final.push('lundi');
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.mardi){
        final.push('mardi');
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.mercredi){
        final.push('mercredi');
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.jeudi){
        final.push('jeudi');
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.vendredi){
        final.push('vendredi');
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.samedi){
        final.push('samedi');
      }
      if(Math.max(jours.lundi,jours.mardi,jours.mercredi,jours.jeudi,jours.vendredi,jours.samedi,jours.dimanche)===jours.dimanche){
        final.push('dimanche');
      }
      return final;
    }

    const conversion = (e) =>{
      Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
      Geocode.setLanguage("fr");
      for(let i = 0 ; i<e.length;i++){
        Geocode.fromAddress(e[i].adresse).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            e[i].adresse = lat.toString() + ',' + lng.toString();
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }


    async function submit(){
      conversion(inputFields);
      const dispoFinale = dispo();
      console.log(dispoFinale);
      console.log(jours);
      console.log(inputFields);
      if(dispoFinale.length === 0){
        console.log('Réessayez');
      }
      else{
        try {
          await axios.post("http://localhost:5000/formulaire",{
            inputFields,
            dispoFinale
          })
        } catch (error) {
          console.log(error)
        }
      }
      }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    }

  return (
    <div className="Formulaire">
      <form>
      {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Nom'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='adresse'
                placeholder='Adresse'
                value={input.adresse}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='disponibilité'
                placeholder='Disponibilité EX : lundi-jeudi'
                value={input.disponibilité}
                onChange={event => handleFormChange(index, event)}
              />
                <button onClick={() => removeFields(index)}>Supprimer</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Ajouter...</button>
      <button onClick={submit}>Envoyer</button>
    </div>
  );
}

export default Formulaire;