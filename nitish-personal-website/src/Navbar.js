import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (window.scrollY > 500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#home">Nitish's<span> Portfolio</span></a>
          </div>
          <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className={isMenuActive ? 'active' : ''} />
          </div>
        </div>
      </nav>

      {showScrollUp && (
        <div className="scroll-up-btn" onClick={handleScrollUp}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </>
  );
};

export default Navbar;
