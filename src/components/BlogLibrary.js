import '../styles/BlogLibrary.css'

import BlogCard from './BlogCard'

function BlogLibrary(props) {
  const { projects } = props

  return (
    <div className='BlogLibrary'>
      {
        projects.map((project, idx) => 
          <BlogCard key={idx} project={project} />
        )
      }
        
    </div>
  );
}

export default BlogLibrary;
