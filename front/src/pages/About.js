import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className='about container'>
            <div className='about-content'>
                <h1 className='about-header'>A propos</h1>
                <p className='about-text'>Let's Meet est une application web qui servira à mieux organiser les sorties entre amis, en proposant à l’utilisateur un lieu de sortie à équidistance des adresses des participants. Cela permet de se mettre d’accord rapidement et facilement sur un lieu où sortir, sans se préoccuper de la recherche d’un lieu qui plaira à tout le monde.</p>
            </div>

            <div className='about-image'>
                <img src='img/map-icon.png'></img>
            </div>
        </div>
    );
};

export default About;