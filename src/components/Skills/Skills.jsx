import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="skills-title">Skills 😊</h1>
      <div className="skills-container">
        <div className="skill-category">
          <h2>Programming Languages</h2>
          <ul>
            <li>Java</li>
            <li>C</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Frontend Technologies</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Frameworks</h2>
          <ul>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>React JS</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Backend Technologies</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Databases</h2>
          <ul>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Tools</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;