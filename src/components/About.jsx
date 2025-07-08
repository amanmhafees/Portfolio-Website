import React from 'react';
import './About.css';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    college: 'Amal Jyothi College of Engineering',
    duration: '2022–Present',
  },
  {
    degree: 'Higher Secondary (92.2%)',
    college: 'Alfeen Public School',
    duration: '2020–2022',
  }
];

const certifications = [
  {
    name: 'Flutter Development',
    org: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-867900b4-58eb-4ab9-b05c-33863cd1e94f/'
  }
];

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        {/* Bio on the left, no card/container */}
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
        {/* Education and Certifications on the right */}
        <div className="about-right">
          <div className="about-edu-card">
            <div className="about-edu-icon"><FaGraduationCap /></div>
            <div className="about-edu-content">
              {education.map((edu, idx) => (
                <div key={idx} className="about-edu-block">
                  <div className="about-edu-degree">{edu.degree}</div>
                  <div className="about-edu-college">{edu.college}</div>
                  <div className="about-edu-duration">{edu.duration}</div>
                  {idx !== education.length - 1 && <hr className="about-edu-separator" />}
                </div>
              ))}
            </div>
          </div>
          <div className="about-cert-list">
            <div className="about-cert-title"><FaCertificate style={{marginRight: '0.5em'}} />Certificates</div>
            {certifications.map((cert, idx) => (
              <div key={idx} className="about-cert-card">
                <div className="about-cert-icon"><FaCertificate /></div>
                <div>
                  <div className="about-cert-name">
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="about-cert-link">{cert.name}</a>
                    ) : (
                      cert.name
                    )}
                  </div>
                  <div className="about-cert-org">{cert.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 