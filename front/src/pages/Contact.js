import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
    <div className='contact container'>
        <div className='contact-box'>
            <h3>Contactez nous !</h3>
            <label>Email :</label>
            <a href="mailto: letsmeet.contactpro@gmail.com"   target="_blank">letsmeet.contactpro@gmail.com</a>
        </div>

        <div className='contact-img'>
            <img src='img/contact.png'></img>
        </div>
    </div>
    );
};

export default Contact;