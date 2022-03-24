import { useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios'

function Formulaire() {

    const [inputFields, setInputFields] = useState([
        {name: '', adresse: '',disponibilité: ''}
    ])

    const handleFormChange = (index,event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { name: '', adresse: '' , disponibilité: ''}
        setInputFields([...inputFields, newfield])
    }

    /*const dispo = () =>{
      for (let i = 0; i<inputFields.length ; i++){
        const str = inputFields[i].disponibilité.split('-')
        for(let j = 0; str.length ; j++){
          console.log('bonjou')
        }
      }
    }*/

    const submit = (e) => {
      console.log(inputFields)
      axios.post('http://localhost:3000/formulaire', { inputFields })
          .then((res) => {
              console.log(res);
          });
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

  return (
    <div className="Formulaire">
      <Navigation/>
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
                placeholder='Adresse de départ'
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