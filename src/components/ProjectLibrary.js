import '../styles/ProjectLibrary.css';
import ProjectCard from './ProjectCard'

const projects = [
  {
    url: "https://addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "/blog/new-tab-page", 
    imageUrl: "/assets/newtab.png",
    imageAlt: "Firefox NewTab homepage"
  },
  {
    url: "./games/platformer/version/7/index.html",
    name: "Platformer",
    description: "A small but fun platformer game created with Phaser as a school project.",
    blogUrl: "/blog/platformer-game",
    imageUrl: "/assets/platformer.png",
    imageAlt: "Screenshot from platformer game."
  },
  {
    url: "https://kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "/blog/new-cooking-website",
    imageUrl: "/assets/kitchefs.png",
    imageAlt: "Recipes home page"
  },
]


function ProjectLibrary() {
  return (
    <div className="ProjectLibrary">
      {
        projects.map((project, idx) => 
          <ProjectCard key={idx} name={project.name} description={project.description} url={project.url} blogUrl={project.blogUrl} imageUrl={project.imageUrl} imageAlt={project.imageAlt} />
        )
      }
        
    </div>
  );
}

export default ProjectLibrary;
