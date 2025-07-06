import React from 'react';
import './Home.css';
import profileImg from '../assets/profile.jpg';

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
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Passionate about creating innovative web applications and turning ideas into reality.
            Specialized in modern web technologies and backend development.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Download CV</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            {/* <span>👨‍💻</span> */}
            <img src={profileImg} alt="profile" className="profile-img" />
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