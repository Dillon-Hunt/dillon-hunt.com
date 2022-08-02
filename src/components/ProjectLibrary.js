import '../styles/ProjectLibrary.css';
import ProjectCard from './ProjectCard'

function ProjectLibrary(props) {
  const projects = props.projects.filter(project => project.featured)

  return (
    <div className='ProjectLibrary'>
      {
        projects.map((project, idx) => 
          <ProjectCard key={idx} project={project} />
        )
      }
        
    </div>
  );
}

export default ProjectLibrary;
