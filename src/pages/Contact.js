import React from 'react';
import ContactCards from '../components/ContactCards';

function Contact() {
    return (
    <div id='contact' className="container-fluid d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
        <h1 className='row text-white mb-5'>Want To...</h1>
        <ContactCards />
        <div className='row text-white mb-5 d-flex flex-wrap py-5'>
            <h2 className='col p-3'>Email</h2>
            <h2 className='col p-3'>Email</h2>
            <h2 className='col p-3'>Email</h2>
            <h2 className='col p-3'>Email</h2>
            <h2 className='col p-3'>Email</h2>
            
        </div>
    </div>
    );
}

export default Contact;