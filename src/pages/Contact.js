import React from 'react';
import ContactCards from '../components/ContactCards';
import Resume from '../assets/JohnsonResume.pdf'

function Contact() {
    return (
    <div id='contact' className="container-fluid d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
        <h1 className='row text-white mb-5'>Want To...</h1>
        <ContactCards />
        <div className='row text-white mb-5 d-flex flex-wrap py-5'>
            <h2 className='col p-3'><a href="mailto:tonybologna123@outlook.com" className="text-white">Email</a></h2>
            <h2 className='col p-3'><a href="https://www.linkedin.com/in/anthony-johnson-3602a41b2/" className="text-white">LinkedIn</a></h2>
            <h2 className='col p-3'><a href="https://github.com/AnthonyJohnson101" className="text-white">Github</a></h2>
            <h2 className='col p-3'><a href={Resume} className="text-white" download>Resume</a></h2>  
        </div>
    </div>
    );
}

export default Contact;