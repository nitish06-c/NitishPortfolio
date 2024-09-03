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
            Hello, I'm <span>Nitish</span>, currently in my fourth year at the University of Toronto, pursuing a degree in <span>Computer Science</span>. With a strong command of languages such as <span>C#, Go, Python, and SQL</span>, and experience in the health tech industry, I am committed to expanding my skills across various sectors. My enthusiasm for technology motivates me to continuously seek new challenges and learning opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
