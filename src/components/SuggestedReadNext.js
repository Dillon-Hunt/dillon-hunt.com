import '../styles/SuggestedReadNext.css';

function SuggestedReadNext(props) {
    return (
      <div className="SuggestedReadNext">
          <img src={props.imageUrl === "" ? '/assets/purple-placeholder.png' : props.imageUrl} alt={props.imageAlt === "" ? "Placeholder Image" : props.imageAlt} />
          <div className="SuggestedReadNext-content">
            {props.url === "" ? 
                <p>{props.name}</p>
            :
                <a className="animation-hover" href={props.url}>{props.name}</a>
            }
            <p>{props.date}</p>
            <p>{props.wordCount < 300 ? 1 : Math.round(props.wordCount / 300)} Min Read</p>
            <p>{props.description}</p>
            <a href={props.blogUrl}>View Post</a>
          </div>
      </div>
    );
  }
  
  export default SuggestedReadNext;
  