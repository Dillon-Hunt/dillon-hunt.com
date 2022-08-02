import '../styles/ProjectCard.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  const { project } = props;

  const [clicked, setChanged] = useState(false)

  return (
    <div className={'ProjectCard ' + (clicked ? 'clicked' : '')} onClick={() => {setChanged(clicked ? false : true)}}>
      <div className='card-inner'>
        <div className='card-front'>
          <img loading='lazy' src={project.imageUrl === '' ? '/assets/purple-placeholder.webp' : project.imageUrl} alt={project.imageCaption === '' ? 'Placeholder Image' : project.imageCaption} />
        </div>
        <div className='card-back'>
          <a className='animation-hover' href={project.projectUrl}>{project.title}</a>
          <p>{project.description}</p>
          <Link to={`../../blog/${project.id}`}>View Project</Link>
          </div>
        </div>
        <p className=''>{project.title}</p>
    </div>
  );
}

export default ProjectCard;
  