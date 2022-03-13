import '../styles/Blog.css';
import Hero from './Hero'
import BlogLibrary from './BlogLibrary'
import { Helmet } from "react-helmet";

function Blog() {
    return (
      <div className="Blog">
        <Helmet>
          <title>Blog | Dillon Hunt</title>
          <meta name="description" content="This is the home of Dillon Hunt's projects, ideas and posts. Don't hesitate to pop on in and take a look." />
        </Helmet>
        <Hero title="Welcome to Dillon Hunt's Blog." subtitle="You have reached my blog, scroll to view my posts." />
        <h1>Blog Posts</h1>
        <BlogLibrary />

        <img id="wave" src="/assets/wave.png" />

        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
      </div>
    );
  }
  
  export default Blog;
  
  