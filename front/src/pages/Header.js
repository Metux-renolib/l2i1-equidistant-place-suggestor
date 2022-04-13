import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar container">
                <div className='logo-box'>
                    <img id ='logoLM' src='img/logo.jpeg' width='60px' ></img>
                    <a href="/" className="logo">
                        Let's meet !
                    </a>
                </div>
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto menu">
                        <li className="nav-item active"><a href="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only"></span></a></li>
                        <li className="nav-item"><a href="/about" className="nav-link text-uppercase font-weight-bold">About</a></li> 
                        <li className="nav-item"><a href="/contact" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;