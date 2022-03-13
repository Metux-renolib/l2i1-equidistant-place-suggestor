import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = "navigation">
            <NavLink exact to="/" activeclassname = "nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="about" activeclassname = "nav-active">
                A propos
            </NavLink>
            <NavLink exact to="login" activeclassname = "nav-active">
                Connexion
            </NavLink>
            <NavLink exact to="formulaire" activeclassname = "nav-active">
                Formulaire
            </NavLink>
        </div>
    );
};

export default Navigation;