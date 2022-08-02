import '../styles/BlogCard.css'

import { Link } from 'react-router-dom'

function BlogCard(props) {
  const { project } = props

  return (
    <div className='BlogCard'>
        <img loading='lazy' src={project.imageUrl === '' ? '/assets/purple-placeholder.webp' : project.imageUrl} alt={project.imageCaption === '' ? 'Placeholder Image' : project.imageCaption} />
        <div className='BlogCard-content'>
          {props.url === '' ? 
            <h3>{project.title}</h3>
          :
            <a href={project.projectUrl}><h3 className='animation-hover'>{project.title}</h3></a>
          }
          <p className='BlogCard__Date'>{project.date}</p>
          <p className='BlogCard__WordCount'>{project.wordCount < 300 ? 1 : Math.round(project.wordCount / 300)} Min Read</p>
          <p>{project.description}</p>
          <Link to={`../../blog/${project.id}`}>View Post</Link>
        </div>
    </div>
  );
}

export default BlogCard;
