import { useParams } from "react-router-dom";
import Hero from "./Hero"
import '../styles/BlogPost.css';

var posts = [
    {
      title: "Platformer",
      content: [
        {
          heading: "Heading 1",
          content: 
          <>
            <p>
              fvtyufv <strong>tyvhbytyvybv</strong> jyftukv yfjgvjhbkuv
            </p>
          </>
        },
        {
        heading: "Heading 2",
        content:
        <>
          <p>
            ygvbkuy <strong>bvuyftyfvkyu,</strong> gvcjytuk yfu56 yugviyuguv
          </p>
        </>
      }
      ]
    },
    {
      title: "NewTab",
      content: [
        {
          heading: "Project Idea",
          content: 
          <>
            <p>
              The idea of NewTab was to create a free web extension to allow users to have a customisable new tab page that was hard to find with similar products. 
              The entire project is based on customisability and simplicity.
            </p>
          </>
        },
        {
        heading: "Success Criteria",
        content:
        <>
          <p>
            ygvbkuy <strong>bvuyftyfvkyu,</strong> gvcjytuk yfu56 yugviyuguv
          </p>
        </>
      }
      ]
    }
]

function BlogPost() {
    var { id } = useParams()
    id = parseInt(id)
    const content = posts.length >= id + 1 ? (
      <>

        {
          posts[id].content.map((post, idx) => 
            <div className="post" key={idx}>
              <h2>{post.heading}</h2>
              {post.content}
            </div>
          )
        }

        <img id="wave" src="/assets/wave.png" />

        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
      </>) :
      (<>
      </>)

    return (
      <div className="BlogPost">
          <Hero title={posts.length >= id + 1 ? posts[id].title : "404"} subtitle={posts.length >= id + 1 ? "A Post By Dillon Hunt." : "Page Not Found"}/>

          {content}
      </div>
    );
  }
  
  export default BlogPost;