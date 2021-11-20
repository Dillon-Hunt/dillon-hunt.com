import '../styles/ProjectCard.css';

function ProjectCard(props) {
    return (
      <div className="ProjectCard">
          <img src={props.imageUrl == "" ? '/assets/purple-placeholder.png' : props.imageUrl} />
          <a className="animation-hover" href={props.url}>{props.name}</a>
          <p>{props.description}</p>
          <a href={props.blogUrl}>View Project</a>
      </div>
    );
  }
  
  export default ProjectCard;
  