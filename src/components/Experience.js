import React from 'react';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>

      <div className="exp-item">
        <h3>Web Development Intern – NullClass Ed.Tech</h3>
        <p>Jun 2024 – Jul 2024</p>
        <ul>
          <li>Built React apps including YouTube clone and video tracker</li>
          <li>Deployed responsive UIs using Netlify</li>
        </ul>
      </div>

      <div className="exp-item">
        <h3>Machine Learning Researcher – IEEE Publication</h3>
        <p>Jan 2024 – Apr 2024</p>
        <ul>
          <li>Co-authored paper on phishing detection (SVM, RF, DNN, NB)</li>
          <li>Achieved 98% accuracy, evaluated with precision and AUC</li>
        </ul>
      </div>

      <div className="exp-item">
        <h3>Freelance Web Developer – Business Site</h3>
        <p>Feb 2024</p>
        <ul>
          <li>Designed responsive website for Electroplating Services</li>
        </ul>
      </div>

      <div className="exp-item">
        <h3>Hackathon Participant – Technovation Hackathon</h3>
        <p>Jan 2025</p>
        <ul>
          <li>Collaborated to build tech-based solutions in 24 hrs</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
