import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: 'Front-End',
            items: [
                'JavaScript',
                'React',
                'Node.js',
                'HTML',
                'CSS',
                'Git',
                'Webpack',
                'JavaScript',
                'React',
                'Node.js',
                'HTML',
                'CSS',
                'Git',
                'Webpack',
                'JavaScript',
                'Babel'
            ]
        },
        {
            category: 'Back-End',
            items: [
                'JavaScript',
                'React',
                'Node.js',
                'HTML',
                'CSS',
                'Git',
                'Webpack',
                'JavaScript',
                'React',
                'Node.js',
                'HTML',
                'CSS',
                'Git',
                'Webpack',
                'JavaScript',
                'Babel'
            ]
        },
        {
            category: 'Concepts',
            items: [
                'JavaScript',
                'React',
                'Node.js',
                'HTML',
                'CSS',
                'Git',
                'Webpack',
                'JavaScript',
                'React',
                'Node.js',
                'HTML',
                'CSS'
            ]
        }
    ];

    return (
        <div id='skills' className='container-fluid d-flex flex-column align-items-center justify-content-center text-white min-vh-100 px-5'>
            <div className='row'>
                <h1 className='mb-5'>Skills</h1>
            </div>

            <div>
                {skills.map((skillCategory, index) => (
                    <div className='row mb-2' key={index}>
                        <h2>{skillCategory.category}</h2>
                        <div className='d-flex flex-wrap'>
                            {skillCategory.items.map((skill, skillIndex) => (
                                <div className='bg-dark rounded p-2 m-2 fs-4' key={skillIndex}>{skill}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
