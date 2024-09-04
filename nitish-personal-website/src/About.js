import React from 'react';
import myImage from './unnamed (1).jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={myImage} alt="About me" />
          </div>
          <div className="column right">
            <p className="intro">
            Hello, I'm <span>Nitish</span>, a fourth-year student at the University of Toronto, pursuing a degree in <span>Computer Science</span>. With a robust proficiency in languages like <span>C#, Go, Python, and SQL</span>, coupled with experience in the health tech industry, I am dedicated to broadening my expertise across diverse sectors. My passion for technology drives me to pursue new challenges and continuous learning opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
