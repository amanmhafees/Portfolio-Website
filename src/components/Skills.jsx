import React from 'react';
import './Skills.css';
import { FaGlobe, FaServer, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    tagline: 'Building beautiful, interactive UIs',
    icon: <FaGlobe color="#06b6d4" size={24} style={{marginRight: 8}} />, // cyan
    dotColor: '#06b6d4',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript',]
  },
  {
    id: 'backend',
    label: 'Backend',
    tagline: 'Robust APIs & scalable logic',
    icon: <FaServer color="#a78bfa" size={24} style={{marginRight: 8}} />, // purple
    dotColor: '#a78bfa',
    skills: ['RESTful APIs', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'Lombok']
  },
  {
    id: 'databases',
    label: 'Databases',
    tagline: 'Reliable data storage & management',
    icon: <FaServer color="#f59e42" size={24} style={{marginRight: 8}} />, // orange (reuse FaServer for DB)
    dotColor: '#f59e42',
    skills: ['MySQL', 'Firebase', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'tools',
    label: 'Tools & Others',
    tagline: 'Productivity & supporting tech',
    icon: <FaTools color="#38bdf8" size={24} style={{marginRight: 8}} />, // blue
    dotColor: '#38bdf8',
    skills: ['Git', 'Java','C','Firebase']
  }
];

const Skills = () => (
  <section id="skills-section" className="skills-section creative-skills-bg">
    <h2 className="section-title">My Skills</h2>
    <div className="skills-grid">
      {skillCategories.map((cat, i) => (
        <div key={cat.id} className={`skills-card modern-skills-card fade-in-up`} style={{'--card-index': i}}>
          <div className="skills-card-header">
            {cat.icon}
            <span className="skills-card-title">{cat.label}</span>
          </div>
          <div className="skills-card-tagline">{cat.tagline}</div>
          <div className="skills-list modern-skills-list">
            {cat.skills.map((skill, index) => (
              <span key={index} className="modern-skill-item">
                <span className="modern-skill-dot" style={{background: cat.dotColor}} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 