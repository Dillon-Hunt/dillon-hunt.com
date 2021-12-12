import '../styles/Home.css';
import Hero from './Hero'
import AboutMe from './About'
import ProjectLibrary from './ProjectLibrary'

function Home() {
  return (
    <div className="Home">
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
