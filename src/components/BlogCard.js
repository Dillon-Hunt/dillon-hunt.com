import '../styles/BlogCard.css';

function BlogCard(props) {
    return (
      <div className="BlogCard">
          <img src={props.imageUrl == "" ? '/assets/purple-placeholder.png' : props.imageUrl} />
          <a className="animation-hover" href={props.url}>{props.name}</a>
          <p>{props.description}</p>
          <a href={props.blogUrl}>View Project</a>
      </div>
    );
  }
  
  export default BlogCard;
  