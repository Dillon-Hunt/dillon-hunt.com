import { useParams } from "react-router-dom";
import Hero from "./Hero"
import '../styles/BlogPost.css';

var posts = [
    {
      title: "Platformer",
    }
]

function BlogPost() {
    let { id } = useParams()
    id = parseInt(id)

    const content = posts.length >= id + 1 ? (
      <>
        <h1>{posts[id].title}</h1>

        <img id="wave" src="/assets/wave.svg" />

        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
      </>) :
      (<>

      </>)

    return (
      <div className="BlogPost">
          <Hero title={posts.length >= id + 1 ? "Hello, I am Dillon Hunt." : "404"} subtitle={posts.length >= id + 1 ? "And this is my blog." : "Page Not Found"}/>

          {content}
      </div>
    );
  }
  
  export default BlogPost;