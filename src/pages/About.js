import React from 'react';
import AboutCards from '../components/AboutCards';

function About() {
    return (
    <div id='about' className="container-fluid d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
        <h1 className='row text-white mb-5'>About My...</h1>
        <AboutCards />
    </div>
    );
}

export default About;