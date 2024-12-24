import React from 'react';
import picture from '../assets/picture2.jpg';
import Resume from '../assets/JohnsonResume.pdf'


function Hero() {
    return (
            <div className='px-5'>
                <div className='row align-items-center' style={{ minHeight: '90vh' }}>
                    <div className="col-md-6 d-flex py-5">
                        <div className="text-white">
                            <h4 className="mb-3">Hello! I am</h4>
                            <h4 className="mb-3">Tony Johnson</h4>
                            <h4 className="mb-3">Full Stack Web Developer</h4>
                            <p className="mb-3 fs-5">
                                I’m a passionate Web Developer based in Michigan with experience in customer care, manufacturing, and retail.
                                As a recent graduate of Michigan State University's Full Stack Web Development Bootcamp, I’m excited to transition into a tech-driven career and apply my skills in coding,
                                problem-solving, and collaboration to develop impactful software solutions.
                                <br /><br />
                                I hold a Full Stack Web Development Certification from Michigan State University and have strong skills in front-end and back-end development, including HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB.
                            </p>
                            <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light m-1" download>Get my resume</a>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center py-5">
                        <img src={picture} className="img-fluid rounded border border-2 border-white" alt="placeholder"/>
                    </div>
                    <svg className="bounce-item d-none d-md-block" href='#About' width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.63574 7.75737L7.04996 6.34315L12.7068 12L7.04998 17.6568L5.63577 16.2426L9.87839 12L5.63574 7.75737Z" fill="#ffffff"></path> <path d="M12.7068 6.34315L11.2926 7.75737L15.5352 12L11.2926 16.2426L12.7068 17.6568L18.3637 12L12.7068 6.34315Z" fill="#ffffff"></path> </g></svg>
                </div>
            </div>
    );
}

export default Hero;
