import React from 'react';
import './App.css'; // Import CSS for styling

const Experience = () => {
  const experiences = [
    {
      date: 'Jan 2022 - Present',
      title: 'Software Engineer at Tech Innovators',
      description: 'Developed scalable web applications, optimized performance, and integrated RESTful APIs.',
    },
    {
      date: 'Jul 2020 - Dec 2021',
      title: 'Frontend Developer at Creative Minds',
      description: 'Designed and implemented user-friendly interfaces with React, Redux, and TypeScript.',
    },
    {
      date: 'Jan 2019 - Jun 2020',
      title: 'Full Stack Developer at Global Solutions',
      description: 'Built and maintained a microservices architecture for e-commerce platforms using Node.js and MongoDB.',
    },
    {
      date: 'Sep 2017 - Dec 2018',
      title: 'Junior Developer at Startup Hub',
      description: 'Collaborated in a team to create MVPs for various startups and gained experience in Agile methodologies.',
    },
    {
      date: 'Jun 2016 - Aug 2017',
      title: 'Intern at Future Tech',
      description: 'Worked on proof-of-concept projects in machine learning and data analysis.',
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="max-width">
        <h2 className="title">Experience</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{experience.date}</div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
