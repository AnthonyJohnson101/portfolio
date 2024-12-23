import React from 'react';
import picture from '../assets/picture2.jpg';

function Hero() {
    return (
        <div className="mask" /* style={{ backgroundColor: 'rgb(28, 16, 97)' }} */>
            <div className='container-fluid px-5'>
                <div className='row'>
                    <div className="col-md-6 d-flex justify-content-center align-items-center h-100 py-5">
                        <div className="text-white">
                            <h4 className="mb-3">Hello! I am</h4>
                            <h4 className="mb-3">Tony Johnson</h4>
                            <h4 className="mb-3">Full Stack Web Developer</h4>
                            <h4 className="mb-3">
                                I’m a passionate Software Engineer based in Michigan with experience in customer care, manufacturing, and retail.
                                As a recent graduate of Michigan State University's Full Stack Web Development Bootcamp, I’m excited to transition into a tech-driven career and apply my skills in coding,
                                problem-solving, and collaboration to develop impactful software solutions.
                                <br /><br />
                                I hold a Full Stack Web Development Certification from Michigan State University and have strong skills in front-end and back-end development, including HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB.
                            </h4>
                            <button type="button" className="btn btn-outline-light">Get my resume</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center py-5">
                        <img src={picture} className="img-fluid rounded border border-2 border-white" alt="placeholder"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
