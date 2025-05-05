import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import resumeFile from './assets/Nitish_Madabusi_Res.pdf';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => ['Computer Science Student', 'Software Engineer', 'Problem Solver'], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum];
      const shouldDelete = isDeleting;
      
      setText(shouldDelete 
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1)
      );

      setTypingSpeed(shouldDelete ? 30 : 150);

      if (!shouldDelete && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setLoopNum((loopNum + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="home-left"
          >
            <div className="text-1">Hello, my name is</div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2"
            >
              Nitish Madabusi
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3"
            >
              I'm a <span className="typing">{text}</span>
              <span className="cursor">|</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="home-buttons"
            >
              <a href={resumeFile} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        onClick={handleScrollToAbout}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleScrollToAbout();
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </motion.div>
    </section>
  );
};

export default Home;
