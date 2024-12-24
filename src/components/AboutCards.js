import React from 'react';

const aboutData = [
    {
        title: 'Past',
        content: 'From a young age, I was fascinated by technology and its potential to transform lives. Whether it was tinkering with gadgets, experimenting with simple coding, or exploring how machines worked, I always sought to understand and create. This passion laid the foundation for my journey into technology. My diverse professional experience—from managing customer service interactions to handling industrial machinery—has shaped my work ethic and problem-solving skills, essential qualities in software development.'
    },
    {
        title: 'Present',
        content: 'Today, I channel my lifelong passion into creating innovative web solutions. Having earned my Full Stack Web Development Certification from Michigan State University, I’ve honed my skills in technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. My work on projects like ReciPeers, Day2Day, and J.A.T.E. showcases my ability to build intuitive, responsive, and functional applications. Whether collaborating in teams or tackling solo projects, I bring a detail-oriented and resourceful approach to solving technical challenges'
    },
    {
        title: 'Future',
        content: 'Looking ahead, I aim to push the boundaries of technology further. My vision is to leverage web development to create tools and applications that enhance daily life and foster connections. I’m excited to work in collaborative environments where I can learn from others, contribute meaningfully, and grow both personally and professionally. As I continue this journey, I hope to inspire others with my story and passion for innovation.'
    }
];

const AboutCards = () => {
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

export default AboutCards;
