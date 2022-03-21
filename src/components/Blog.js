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
        <h2>Blog Posts</h2>
        <BlogLibrary />

        <img id="wave" src="/assets/wave.png" alt="" />

        <footer>
            <h2>Contact Me</h2>
            <p>admin@dillon-hunt.com</p>
        </footer>
      </div>
    );
  }
  
  export default Blog;
  
  