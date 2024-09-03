import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">Projects</h2>
        <div className="projects-content">
          <div className="project-card">
            <a href="https://github.com/nitish06-c/team-project-14-healthy-mom-and-child-m" target="_blank" rel="noopener noreferrer">
              <div className="project-info">
                <h3>Healthy Mom & Child+</h3>
                <p>Developed a health application with a team of 5 to educate, monitor, and detect health issues for women planning to conceive, those who are pregnant, perinatal women, and their children up to age 12.</p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/nitish06-c/course-project-the-losers-club" target="_blank" rel="noopener noreferrer">
              <div className="project-info">
                <h3>Card Mania</h3>
                <p>Developed a Java-based card games application featuring Crazy Eights, War, Gofish, and Bura, complete with a GUI and database integration.</p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/nitish06-c/modbot" target="_blank" rel="noopener noreferrer">
              <div className="project-info">
                <h3>Modbot</h3>
                <p>Developed a Discord bot utilizing the discord.py API, which includes server management capabilities along with features such as 8-ball queries, movie recommendations, and message deletion functionality.</p>
              </div>
            </a>
          </div>
          {/* TODO: Add more projects as you keep updating */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
