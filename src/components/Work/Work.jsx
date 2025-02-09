import React, { useState } from 'react';
import './Work.css';
import workData from '../../assets/workData';
import arrow from '../../assets/arrow.png';

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3); // Show 3 more projects
  };

  return (
    <div id='work' className='work'>
      <div className="work-title">
        <h1>Projects</h1>
      </div>

      <div className="work-container">
        {workData.slice(0, visibleProjects).map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.wimg} alt={work.name} />
            <h2>{work.name}</h2>
            <p>{work.description}</p>
          </div>
        ))}
      </div>

      {visibleProjects < workData.length && (
        <div className="work-showmore" onClick={handleShowMore}>
          <p>See More</p>
          <img src={arrow} alt="arrow" />
        </div>
      )}
    </div>
  );
};

export default Work;