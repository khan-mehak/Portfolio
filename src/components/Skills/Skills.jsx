import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div>
      <h1 className='h1'>Skills 😊</h1>
    <div id='skills' className="skills">
      
      <div className="lang">
        <h1>Programming Languages</h1>
        <ul>
          <li>Java</li>
          <li>C</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="lang">
        <h1>Frontend Technologies</h1>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          </ul>
          </div>

          <div className="lang">
          <h2>Frameworks</h2>
          <ul>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>React JS</li>
          </ul>
          </div>
          
          



      <div className="lang">
        <h1>Backend Technologies</h1>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>

      <div className="lang">
        <h1>Databases</h1>
        <ul>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className="lang">
        <h1>Tools</h1>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Skills;
