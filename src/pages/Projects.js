import React from 'react';
import jatePic from '../assets/Jate.jpg';
import day2dayPic from '../assets/Day2Day.jpg';
import recipeersPic from '../assets/ReciPeers.jpg';

const Projects = () => {
    const projectData = [
        {
            imgSrc: jatePic,
            title: "J.A.T.E",
            description: "J.A.T.E is just another text editor, except it can be installed and used on your desktop using the power of progressive web applications!",
            technologies: "HTML, CSS, Javascript, Node.js, Express.js, and NoSQL",
            visitLink: "https://jate-pwa01.herokuapp.com/",
            codeLink: "https://github.com/AnthonyJohnson101/jate-pwa"
        },
        {
            imgSrc: day2dayPic,
            title: "Day2Day",
            description: "Day2Day is dashboard that displays current data such as the current weather, stock prices, and recent news articles. It also has a word of the day to sharpen your vocabulary.",
            technologies: "HTML, CSS, JavaScript, and Third-Party APIs",
            visitLink: "https://anthonyjohnson101.github.io/recent-events-dashboard/",
            codeLink: "https://github.com/AnthonyJohnson101/recent-events-dashboard"
        },
        {
            imgSrc: recipeersPic,
            title: "ReciPeers",
            description: "ReciPeers is a social platform for sharing your favorite recipes or finding something new to cook up in the kitchen.",
            technologies: "Handlebars.js, JavaScript, CSS, Node.js, Express.js, Sequelize, and MySQL",
            visitLink: "https://recipeers.herokuapp.com/",
            codeLink: "https://github.com/AnthonyJohnson101/project-2"
        }
    ];

    return (
        <div id='projects' className='container-fluid d-flex flex-column align-items-center justify-content-center text-white min-vh-100 px-5'>
            <div className='row'>
                <h1 className='mb-5'>Projects</h1>
            </div>
            {projectData.map((project, index) => (
                <div className='row' key={index}>
                    <div className="col-md-6 d-flex justify-content-end align-items-center py-5">
                        <img src={project.imgSrc} className="img-fluid rounded border border-2 border-white" alt="placeholder"/>
                    </div>
                    <div className="col-md-6 d-flex py-5">
                        <div className="text-white">
                            <h4 className="mb-3">{project.title}</h4>
                            <h4 className="mb-3">Made with: {project.technologies}</h4>
                            <h4 className="mb-3">{project.description}</h4>
                            <a href={project.visitLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light m-1">Visit</a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">View Code</a>
                        </div>
                    </div>      
                </div>
            ))}
        </div>
    );
};

export default Projects;
