import { useParams } from "react-router-dom";
//import '../styles/Blog.css';

function Blog() {
    const { id } = useParams()
    return (
      <div className="Blog">
          <h1>Blog Post ID: {id}</h1>
      </div>
    );
  }
  
  export default Blog;
  