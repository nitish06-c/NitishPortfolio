import React from 'react';
import './App.css'; // Import CSS for styling

const Experience = () => {
  const experiences = [
    {
      date: 'May 2023 - August 2024',
      title: 'Software Engineer Intern',
      description: [
        {
          project: 'Work Project 1',
          details: ['Implemented backend services for data processing.', 'Developed automated testing tools to improve code reliability.'],
        },
        {
          project: 'Work Project 2',
          details: ['Collaborated on front-end development using React.', 'Refactored code for performance optimization.'],
        },
      ],
    },
    {
      date: 'Jul 2020 - Dec 2021',
      title: 'Frontend Developer at Creative Minds',
      description: [
        {
          project: 'Work Project 1',
          details: ['Designed responsive user interfaces using React and Redux.', 'Enhanced performance by optimizing components with TypeScript.'],
        },
        {
          project: 'Work Project 2',
          details: ['Led a team of developers to redesign the main product page.', 'Implemented new features for better user engagement.'],
        },
      ],
    },
    // Add more experiences here
  ];

  return (
    <section className="experience" id="experience">
      <div className="max-width">
        <h2 className="title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{experience.date}</div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <ul>
                  {experience.description.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.project}:</strong>
                      <ul>
                        {item.details.map((detail, subIdx) => (
                          <li key={subIdx}>- {detail}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
