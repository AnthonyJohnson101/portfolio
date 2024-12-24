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
        <a className="navbar-brand text-white" href="#home">Tony Johnson</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
