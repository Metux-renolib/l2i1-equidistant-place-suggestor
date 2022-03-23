//Composant A propos
import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <h1>A propos</h1>
            <p>Cette application a été confectionnée pour l'élaboration de notre projet informatique de notre deuxième année de licence. Pour plus d'informations sur les participants de ce projet, rendez-vous sur la page contact.</p>
        </div>
    );
};

export default About;