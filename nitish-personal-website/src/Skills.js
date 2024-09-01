import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">Skills</h2>
        <div className="skills-content">
          {/* Programming Languages Card */}
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faCode} size="3x" />
              <div className="text">Programming Languages</div>
              <p>C#, Go, Python, SQL, Angular, React, Node.js, HTML, CSS, C, Java, LaTeX</p>
            </div>
          </div>
          {/* Technologies & Tools Card */}
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faTools} size="3x" />
              <div className="text">Technologies & Tools</div>
              <p>Git, GitHub, GitLab, .NET, Numpy, Pandas, Matplotlib, MySQL, SQLite, Azure</p>
            </div>
          </div>
          {/* Frameworks & Technologies Card */}
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faDatabase} size="3x" />
              <div className="text">Frameworks & Technologies</div>
              <p>.NET, Angular, React, Node.js, Docker, Prometheus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
