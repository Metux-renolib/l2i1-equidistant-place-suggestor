import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = "navigation">
            <NavLink exact to="/" activeclassName = "nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="about" activeclassName = "nav-active">
                A propos
            </NavLink>
            <NavLink exact to="login" activeclassName = "nav-active">
                Connexion
            </NavLink>
        </div>
    );
};

export default Navigation;