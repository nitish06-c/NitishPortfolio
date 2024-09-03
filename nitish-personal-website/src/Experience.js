import React from 'react';
import './App.css'; // Import CSS for styling

const Experience = () => {
  const experiences = [
    {
      date: 'May 2023 - August 2024',
      title: 'Software Engineer Intern',
      company: 'PocketHealth',
      location: 'Toronto, ON',
      description: [
        // {
        //   project: 'Advanced ML-Driven Automated Appointment Follow-Ups',
        //   details: ['Designed and developed a resilient, event-driven system using microservices architecture with Azure, C#, Go, MySQL, and Docker, leveraging containerization for scalability and efficient data processing.', 'Developed clients to seamlessly integrate patient observations with our machine learning model and internal microservices.', 'Leveraged OpenAPI specification generation and Goose migrations to maintain up-to-date documentation and enforce consistency across development practices.', 'Designed and implemented comprehensive unit and integration tests to guarantee the seamless operation and reliability of the system with the machine learning model, ensuring thorough validation of all components.'],
        // },
        {
            project: 'Advanced ML-Driven Automated Appointment Follow-Ups',
            details: ['Designed and developed an advanced ML-driven appointment follow-up system using Azure, C#, Go, MySQL, and Docker, integrating patient data with machine learning models and ensuring system reliability through comprehensive testing and up-to-date documentation.'],
        },
        // {
        //   project: 'External Logging and Alerting Infrastructure for Core Provider Services',
        //   details: ['Architected and implemented an efficient, compliance-friendly logging solution using Azure and C# to enhance observability of on-premise applications, significantly reducing investigation time for bugs and improving system monitoring.', 'Developed a real-time notification framework integrating Azure Container logs with Prometheus in the Log Analytics Workspace, improving communication, response times, patient care, and operational efficiency.'],
        // },
        {
            project: 'External Logging and Alerting Infrastructure for Core Provider Services',
            details: ['Architected and implemented a compliance-friendly logging solution using Azure and C# for improved observability of on-premise applications, and developed a real-time notification framework integrating Azure Container logs with Prometheus, enhancing system monitoring, communication, and operational efficiency.'],
        },
        // {
        //   project: 'Secure Healthcare Data Integration',
        //   details: ['Contributed to the development of a secure HL7 interface engine over TCP/IP, implementing Health Level Seven (HL7) standards for confidential healthcare data exchange, impacting 1.7M+ patients across 150+ providers', 'Refined the HL7 interface in C# by integrating new message classes, broadening support for additional healthcare providers, and optimizing data transmission. Developed sample resources to facilitate HL7 message ingestion testing for the engineering team.', 'Refined the HL7 interface in C# by integrating new message classes, broadening support for additional healthcare providers, and optimizing data transmission. Developed sample resources to facilitate HL7 message ingestion testing for the engineering team.'],
        // },
        {
            project: 'Secure Healthcare Data Integration',
            details: ['Contributed to the development of a secure HL7 interface engine over TCP/IP for confidential healthcare data exchange, impacting 1.7M+ patients across 150+ providers, and refined the HL7 interface in C# by integrating new message classes, broadening support for additional healthcare providers, and optimizing data transmission, along with developing sample resources for HL7 message ingestion testing.'],
        },
        {
          project: 'Efficient Automated Appointment Communications',
          details: ['Implemented a reliable system to automate the opt-out process for appointment reminders, managing over 2,500 messages between patient and provider systems and Customer.IO, and streamlined hospital staff operations by enhancing the appointment reminders dashboard with advanced filtering, sorting, and pagination in Angular.'],
        },
        // {
        //     project: 'Efficient Automated Appointment Communications',
        //     details: ['Contributed to the development of a secure HL7 interface engine over TCP/IP for confidential healthcare data exchange, impacting 1.7M+ patients across 150+ providers, and refined the HL7 interface in C# by integrating new message classes, broadening support for additional healthcare providers, and optimizing data transmission, along with developing sample resources for HL7 message ingestion testing.'],
        // },
      ],
    },
    {
      date: 'September 2022 - April 2023',
      title: 'Tech2U Student Classroom Ambassador',
      company: 'University of Toronto Learning Space Management',
      location: 'Toronto, ON',
      description: [
        {
          project: 'Technical Support and Team Collaboration',
          details: ['Resolved projector and recording system issues, refined team coordination, and ensured seamless work shifts while enhancing faculty support.'],
        },
      ],
    },
    {
        date: 'August 2021 - May 2022',
        title: 'External Coordinator',
        company: 'Google Developer Student Club - University of Toronto Mississauga',
        location: 'Mississauga, ON',
        description: [
          {
            project: 'Collaboration & Planning',
            details: ['Helped organize weekly team meetings with the team to plan and execute online workshops throughout the academic year. Coordinated with other GDSC Executive Team members and university clubs to strategize event and workshop agendas.'],
          },
          {
            project: 'Sponsorship & Partnerships',
            details: ['Developed proposal plans for potential sponsors including companies, clubs, and other GDSC chapters across North America, utilizing Slack for communications to secure funding for workshops and events.']
          }
        ],
      },
      {
        date: 'September 2021 - April 2022',
        title: 'Tech2U Student Classroom Ambassador',
        company: 'University of Toronto - Student Life (St. George)',
        location: 'Toronto, ON',
        description: [
          {
            project: 'Technical Support and Team Collaboration',
            details: ['Resolved projector and recording system issues, refined team coordination, and ensured seamless work shifts while enhancing faculty support.'],
          },
        ],
      },
      {
        date: 'May 2021 - August 2021',
        title: 'Technology Support Analyst',
        company: 'Ontario Institute for Studies in Education',
        location: 'Toronto, ON',
        description: [
          {
            project: 'Zoom Support and Virtual Drop-ins',
            details: ['Enhanced virtual teaching infrastructure by scaling up Zoom licensing for sessional instructors at the Education Commons in OISE. Provided expert assistance in virtual drop-in sessions, resolving software issues and collaborating with team members to ensure optimal service delivery.'],
          },
        ],
      },
      // Can add more experiences as needed
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
                <p className="company">{experience.company}</p> {/* Company */}
                <p className="location">{experience.location}</p> {/* Location */}
                <ul>
                  {experience.description.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.project}:</strong>
                      <ul>
                        {item.details.map((detail, subIdx) => (
                          <li key={subIdx} className="experience-detail">
                            &ndash; {detail} {/* Added dash before each detail */}
                          </li>
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
