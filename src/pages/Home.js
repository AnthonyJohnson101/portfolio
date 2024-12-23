import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Hero from '../components/Hero'; // Adjust the path as necessary

function Home() {
    return (
        <div className='min-vh-100'>
           <Navbar />
           <Hero />
        </div>
    );
}

export default Home;