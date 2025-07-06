import React from 'react';
import './Projects.css';
import ss1 from '../assets/1.jpg';
import ss2 from '../assets/2.jpg';
import ss3 from '../assets/3.jpg';
import ss4 from '../assets/4.jpg';

const Projects = () => {
  const projects = [
    
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite.',
      image: '💼',
      technologies: ['React', 'CSS3', 'JavaScript', 'Vite'],
      features: [
        'Responsive design',
        'Modern UI/UX',
        'Smooth animations',
        'Contact form'
      ],
      github: '#',
      live: '#',
      category: 'Frontend'
    },
    {
      id: 1,
      title: 'PowerPath',
      description: 'A mobile app for Kerala State Electricity Board (KSEB) officers to optimize workflow and manage transformer-related tasks. Features Google Maps navigation, fault logging, maintenance scheduling, and more.',
      image: '⚡',
      screenshots: [ss1, ss2, ss3, ss4],
      technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Role-based Access'],
      features: [
        'Transformer navigation with Google Maps integration',
        'Fault logging system for tracking transformer faults',
        'Maintenance scheduler for creating and updating maintenance plans',
        'Advanced transformer search and filter options',
        'Section-wise dashboard with transformer status overview',
        'User role-based access for tailored interfaces',
        'Maintenance history and digital transformer inspection checklist'
      ],
      github: 'https://github.com/amanmhafees/power_path.git',
    
      category: 'Mobile App'
    },
    {
      id: 5,
      title: 'SkillBridge',
      description: 'A full-stack freelancing job marketplace connecting employers and workers for short-term gigs and skill-based tasks. Features job posting, applications, role-based access, dashboards, live notifications, and more.',
      image: '💼',
      technologies: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'JWT', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Job Posting & Management: Employers can post, edit, delete, and manage jobs with detailed info.',
        'Applications & Assignments: Workers browse jobs by location, apply, cancel (with reason), and mark jobs as completed.',
        'Role-Based Access: Separate flows for Employer and Worker with secure JWT authentication and authorization.',
        'Dashboards: Dynamic stats for posted jobs, completed jobs, live jobs by location, and user profiles.',
        'Live Notifications: Workers get real-time updates for new jobs near their location.',
        'Profile Management: Workers manage skills, experience, availability, and profile image.',
        'Custom JWT service for role/permission verification',
        'One-to-Many and Many-to-One JPA relationships',
        'Exception handling with proper HTTP status codes',
        'Real-time dashboard counts and live job tracking'
      ],
      github: 'https://github.com/amanmhafees/skill-bridge-frontend',
      backend: 'https://github.com/amanmhafees/skill-bridge-backend',
      live: '',
      category: 'Web App'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on, showcasing my skills and passion for development.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" data-title={project.title}>
              <div className="project-image">
                <div className="project-icon-wrapper">
                  <div className="project-icon">{project.image}</div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>📁</span> {project.backend ? 'Frontend GitHub' : 'GitHub'}
                      </a>
                    )}
                    {project.backend && (
                      <a href={project.backend} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🗄️</span> Backend GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🌐</span> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {/* Screenshots gallery */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="project-screenshots">
                    {project.screenshots.map((src, i) => (
                      <img key={i} src={src} alt={`Screenshot ${i+1}`} className="project-screenshot-img" />
                    ))}
                  </div>
                )}
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com/amanmhafees" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 