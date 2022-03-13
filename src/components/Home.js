import '../styles/Home.css';
import Hero from './Hero'
import AboutMe from './About'
import ProjectLibrary from './ProjectLibrary'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <title>Home | Dillon Hunt</title>
        <meta name="description" content="Hi, I'm Dillon Hunt. I am a frontend programmer who enjoys exploring the world of programming by creating &amp; designing both static and dynamic websites." />
      </Helmet>
        <Hero title="Hello, I am Dillon Hunt." subtitle="But if your here you probably already knew that." />
        <AboutMe />

        <h1>Projects</h1>
        <ProjectLibrary />
        <img id="wave" src="/assets/wave.png" />
    
        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
    </div>
  );
}

export default Home;
