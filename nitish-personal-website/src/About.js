import React from 'react';
import aboutImage from './assets/images/unnamed (1).jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="left">
            <img src={aboutImage} alt="About Me" />
          </div>
          <div className="right">
            <div className="intro">
              Hello, I'm <span>Nitish</span>, a fourth-year student at the University of Toronto, 
              pursuing a degree in <span>Computer Science</span>. With a robust proficiency in 
              languages like <span>C#, Go, Python, and SQL</span>, coupled with experience in 
              the health tech industry, I am dedicated to broadening my expertise across diverse 
              sectors. My passion for technology drives me to pursue new challenges and 
              continuous learning opportunities.
            </div>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
