import React, { useState } from 'react';
import './Work.css';
import workData from '../../assets/workData';
import arrow from '../../assets/arrow.png';

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  if (!workData || workData.length === 0) {
    return <div>No projects to display.</div>;
  }

  return (
    <section id='work' className='work'>
      <div className="work-title">
        <h1>Projects</h1>
      </div>

      <div className="work-container">
        {workData.slice(0, visibleProjects).map((work, index) => (
          <article key={index} className="work-item">
            <img src={work.wimg} alt={work.name} />
            <h2>{work.name}</h2>
            <p>{work.description}</p>
          </article>
        ))}
      </div>

      {visibleProjects < workData.length && (
        <button className="work-showmore" onClick={handleShowMore}>
          <p>See More</p>
          <img src={arrow} alt="Arrow icon" />
        </button>
      )}
    </section>
  );
};

export default Work;