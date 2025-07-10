import React from 'react';
import './Home.css';
import profileImg from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Aman M Hafees</span>
          </h1>
          <div className="hero-skills">
            <span className="skill-badge web-badge">Full-Stack Web Developer</span>
            <span className="skill-badge flutter-badge">Flutter Developer</span>
          </div>
          {/* <h2 className="hero-subtitle">Full Stack Developer</h2> */}
          <p className="hero-description">
            Passionate about creating innovative web applications and turning ideas into reality.
            Specialized in modern web technologies and backend development.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </button>
            <a href="/Resume.pdf" download className="btn btn-secondary">Download Resume</a>
            {/* <button className="btn btn-secondary">Download Resume</button> */}
          </div>
        </div>
        <div className="hero-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="profile-placeholder">
            {/* <span>👨‍💻</span> */}
            <img src={profileImg} alt="profile" className="profile-img" />
          </div>
          <div className="hero-social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="https://github.com/amanmhafees" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/aman-m-hafees" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={28} color="#0077b5" />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home; 