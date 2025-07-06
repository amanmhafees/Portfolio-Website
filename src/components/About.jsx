import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 80, icon: '⚡' },
    { name: 'Java', level: 75, icon: '☕' },
    { name: 'C', level: 70, icon: '🔧' },
    { name: 'Spring Boot', level: 75, icon: '🍃' },
    { name: 'Spring JPA', level: 70, icon: '🗄️' }
  ];

  const experiences = [
    {
      title: 'Internship',
      company: 'Covalense Digital',
      duration: '1 Month',
      description: 'Completed an intensive internship program focusing on web development and modern technologies.',
      skills: ['Web Development', 'Team Collaboration', 'Project Management']
    },
    {
        title: 'Mini Project: PowerPath App',
        company: 'Kerala State Electricity Board (KSEB)',
        duration: '2024',
        description: 'Developed PowerPath, a mobile app for KSEB officers to optimize workflow and manage transformer-related tasks. Integrated Google Maps navigation, fault logging, maintenance scheduling, advanced search/filter, dashboards, and role-based access. The app streamlines operations, boosts productivity, and strengthens KSEB’s ability to provide timely and reliable power services.',
        skills: ['Flutter', 'Google Maps API', 'Firebase', 'Mobile App Development', 'UI/UX', 'Workflow Automation']
      }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              My journey in software development started with a curiosity to build things that make a difference.
            </p>
            <p>
              I completed a one-month intensive internship at Covalense Digital, where I gained hands-on experience 
              in web development and learned to work effectively in a professional environment. This experience 
              helped me understand real-world development practices and team collaboration.
            </p>
            <p>
              I've also developed a mini project application that demonstrates my ability to create complete 
              web solutions from concept to deployment. This project showcases my skills in modern web technologies 
              and my commitment to writing clean, maintainable code.
            </p>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-row">
                  <span className="skill-row-name">{skill.icon} {skill.name}</span>
                  <div className="skill-row-bar-bg">
                    <div className="skill-row-bar-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="skill-row-percent">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
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
        </div>
      </div>
    </section>
  );
};

export default About; 