import React, { useEffect, useState } from 'react';
import './App.css'; // Import your existing CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Handle scroll events for sticky navbar and scroll-up button visibility
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

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll-up button click
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle mobile menu and icon
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      {/* Navbar Component */}
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="max-width">
          <div className="logo"><a href="#">Nitish's<span> Portfolio.</span></a></div>
          <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#experience" className="menu-btn">Experience</a></li>
            <li><a href="#projects" className="menu-btn">Projects</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className={isMenuActive ? 'active' : ''} />
          </div>
        </div>
      </nav>

      {/* Scroll-Up Button */}
      {showScrollUp && (
        <div className="scroll-up-btn" onClick={handleScrollUp}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </>
  );
};

export default Navbar;
