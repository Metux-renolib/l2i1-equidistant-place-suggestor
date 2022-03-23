import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <div>
            <header class="header">
    <h1>Let's Meet</h1>
    <nav class="navbar navbar-expand-lg fixed-top py-3">
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="/" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only"></span></a></li>
                    <li class="nav-item"><a href="/login" class="nav-link text-uppercase font-weight-bold">Login</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link text-uppercase font-weight-bold">About</a></li> 
                    <li class="nav-item"><a href="/contact" class="nav-link text-uppercase font-weight-bold">Contact</a></li>
                </ul>
            </div>
    </nav>
            </header>
        </div>
    );
};

export default Header;