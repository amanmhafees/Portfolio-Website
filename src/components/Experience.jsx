import React from 'react';
import './Experience.css';
import { FaBriefcase, FaBolt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Internship',
    company: 'Covalense Digital',
    duration: '1 Month',
    description: 'Completed an intensive internship program focusing on web development and modern technologies.',
    skills: ['Web Development', 'Team Collaboration', 'Project Management'],
    icon: <FaBriefcase color="#3b82f6" size={22} style={{marginRight: 10}} />
  },
  {
    title: 'Mini Project: PowerPath App',
    company: 'Kerala State Electricity Board (KSEB)',
    duration: '2024',
    description: 'Developed PowerPath, a mobile app for KSEB officers to optimize workflow and manage transformer-related tasks. Integrated Google Maps navigation, fault logging, maintenance scheduling, advanced search/filter, dashboards, and role-based access. The app streamlines operations, boosts productivity, and strengthens KSEB’s ability to provide timely and reliable power services.',
    skills: ['Flutter', 'Google Maps API', 'Firebase', 'Mobile App Development', 'UI/UX', 'Workflow Automation'],
    icon: <FaBolt color="#f59e42" size={22} style={{marginRight: 10}} />
  }
];

const Experience = () => (
  <section id="experience-section" className="experience-section">
    <h2 className="section-title">Experience</h2>
    <div className="experience-timeline creative-timeline">
      <div className="timeline-bar"></div>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item fade-in-timeline" style={{'--exp-index': index}}>
          <div className="timeline-dot"></div>
          <div className="experience-header">
            {exp.icon}
            <h4>{exp.title}</h4>
            <span className="company">{exp.company}</span>
            <span className="duration">{exp.duration}</span>
          </div>
          <p className="experience-description">{exp.description}</p>
          <div className="experience-skills">
            {exp.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience; 