import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-5">
        <a className="navbar-brand text-white fs-4" href="#home">Tony Johnson</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
        <svg width="32px" height="32px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.32H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 18.32H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6.32001H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about" onClick={closeNavbar}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills" onClick={closeNavbar}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects" onClick={closeNavbar}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact" onClick={closeNavbar}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
