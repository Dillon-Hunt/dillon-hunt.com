import '../styles/Home.css';
import Hero from './Hero'
import AboutMe from './About'
import ProjectLibrary from './ProjectLibrary'

function Home() {
  return (
    <div className="Home">
        <Hero />
        <AboutMe />

        <h1>Home</h1>
        <ProjectLibrary />
        <img src="/assets/wave.png" />
    
        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
    </div>
  );
}

export default Home;
