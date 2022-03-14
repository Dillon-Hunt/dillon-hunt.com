import '../styles/ProjectCard.css';
import React, { useState } from 'react';

function ProjectCard(props) {
    var [clicked, setChanged] = useState(false)
    return (
      <div className={"ProjectCard " + (clicked ? "clicked" : "")} onClick={() => {setChanged(clicked ? false : true)}}>
        <div className='card-inner'>
          <div className="card-front">
            <img src={props.imageUrl === "" ? '/assets/purple-placeholder.png' : props.imageUrl} alt={props.imageAlt === "" ? "Placeholder Image" : props.imageAlt} />
          </div>
          <div className="card-back">
            <a className="animation-hover" href={props.url}>{props.name}</a>
            <p>{props.description}</p>
            <a href={props.blogUrl}>View Project</a>
            </div>
          </div>
      </div>
    );
  }
  
  export default ProjectCard;
  