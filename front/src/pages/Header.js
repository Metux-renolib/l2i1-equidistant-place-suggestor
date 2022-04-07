import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
    <h1>Let's Meet</h1>
    <nav className="navbar navbar-expand-lg fixed-top py-3">
            
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a href="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only"></span></a></li>
                    <li className="nav-item"><a href="/about" className="nav-link text-uppercase font-weight-bold">About</a></li> 
                    <li className="nav-item"><a href="/contact" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                </ul>
            </div>
    </nav>
            </header>
        </div>
    );
};

export default Header;