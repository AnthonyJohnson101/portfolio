import React from 'react';

const aboutData = [
    {
        title: 'Offer a job opportunity?',
        content: 'As a certified Full Stack Web Developer with experience in creating innovative and responsive web applications, I’m always open to new opportunities where I can contribute to impactful projects. Whether it’s leveraging my skills in the MERN stack or collaborating with a team to build robust solutions, I’m ready to bring value to your organization.'
    },
    {
        title: 'Connect?',
        content: 'I enjoy connecting with like-minded professionals and enthusiasts in the tech space. Whether it’s sharing ideas, discussing emerging technologies, or exploring potential collaborations, I’m always eager to expand my network and engage with the community.'
    },
    {
        title: 'Build something?',
        content: 'Let’s turn ideas into reality! With experience in both front-end and back-end development, as well as a passion for solving problems through technology, I’m excited to collaborate on projects that make a difference. Let’s create something amazing together!'
    }
];

const ContactCards = () => {
    return (
        <div className="row text-white p-5">
            {aboutData.map((item, index) => (
                <div className="col-md-4 mb-3" key={index}>
                    <h3 className='mb-3'>{item.title}</h3>
                    <p className='fs-4'>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactCards;