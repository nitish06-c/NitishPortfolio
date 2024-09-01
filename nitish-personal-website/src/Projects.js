import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">Projects</h2>
        <div className="projects-content">
          <div className="project-card">
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
              <img src="project1-image.png" alt="Project 1" />
              <div className="project-info">
                <h3>Healthy Mom & Child+</h3>
                <p>Developed a health application with a team of 5 to educate, monitor, and detect health issues for women
planning to conceive, those who are pregnant, perinatal women, and their children up to age 12.</p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
              <img src="project2-image.png" alt="Project 2" />
              <div className="project-info">
                <h3>Project Name 2</h3>
                <p>Description of Project 2</p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer">
              <img src="project3-image.png" alt="Project 3" />
              <div className="project-info">
                <h3>Project Name 3</h3>
                <p>Description of Project 3</p>
              </div>
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
