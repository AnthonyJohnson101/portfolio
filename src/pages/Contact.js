import React from 'react';
import ContactCards from '../components/ContactCards';
import Resume from '../assets/JohnsonResume.pdf';

const contactLinks = [
    { href: "mailto:tonybologna123@outlook.com", text: "Email" },
    { href: "https://www.linkedin.com/in/anthony-johnson-3602a41b2/", text: "LinkedIn" },
    { href: "https://github.com/AnthonyJohnson101", text: "Github" },
    { href: Resume, text: "Resume", download: true }
];

function Contact() {
    return (
        <div id='contact' className="container-fluid d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
            <h1 className='row text-white mb-5'>Want To...</h1>
            <ContactCards />
            <div className='row text-white mb-5 d-flex flex-wrap py-5'>
                {contactLinks.map((link, index) => (
                    <h2 key={index} className='col p-3 pop-item'>
                        <a 
                            href={link.href} 
                            className="text-white link-underline link-underline-opacity-0" 
                            {...(link.download && { download: true })}
                        >
                            {link.text}
                        </a>
                    </h2>
                ))}
            </div>
        </div>
    );
}

export default Contact;