import '../styles/BlogCard.css';

function BlogCard(props) {
    return (
      <div className="BlogCard">
          <img loading="lazy" src={props.imageUrl == "" ? '/assets/purple-placeholder.webp' : props.imageUrl} alt={props.imageAlt === "" ? "Placeholder Image" : props.imageAlt} />
          <div className="BlogCard-content">
            {props.url == "" ? 
              <h3>{props.name}</h3>
            :
              <a href={props.url}><h3 className="animation-hover">{props.name}</h3></a>
            }
            <p>{props.date}</p>
            <p>{props.wordCount < 300 ? 1 : Math.round(props.wordCount / 300)} Min Read</p>
            <p>{props.description}</p>
            <a href={props.blogUrl}>View Post</a>
          </div>
      </div>
    );
  }
  
  export default BlogCard;
  