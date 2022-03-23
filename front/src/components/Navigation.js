import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className = "navigation">
            <NavLink exact to="/" activeclassname = "nav-active">
            </NavLink>
            <NavLink exact to="about" activeclassname = "nav-active">
            </NavLink>
            <NavLink exact to="login" activeclassname = "nav-active">
            </NavLink>
            <NavLink exact to="formulaire" activeclassname = "nav-active">
            </NavLink>
            <NavLink exact to="contact" activeclassname = "nav-active">
            </NavLink>
        </div>
    );
};

export default Navigation;