import '../styles/ProjectLibrary.css';
import ProjectCard from './ProjectCard'

const projects = [
  {
    url: "https://kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "./blog/000111",
    imageUrl: "/assets/kitchefs.png"
  },
  {
    url: "https://addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "./blog/000110", 
    imageUrl: "/assets/newtab.png"
  },
  {
    url: "https://kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "./blog/000101",
    imageUrl: "/assets/kitchefs.png"
  },
  {
    url: "https://addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "./blog/000100", 
    imageUrl: "/assets/newtab.png"
  },
  {
    url: "./games/platformer/version/7/index.html",
    name: "Platformer",
    description: "A small but fun platformer game created with Phaser as a school project.",
    blogUrl: "./blog/000011",
    imageUrl: "/assets/platformer.png"
  },
  {
    url: "https://kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "./blog/000010",
    imageUrl: "/assets/kitchefs.png"
  },
  {
    url: "https://addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "./blog/000001", 
    imageUrl: "/assets/newtab.png"
  },
  {
    url: "./games/platformer/version/7/index.html",
    name: "Platformer",
    description: "A small but fun platformer game created with Phaser as a school project.",
    blogUrl: "./blog/000000",
    imageUrl: "/assets/platformer.png"
  },
]


function ProjectLibrary() {
  return (
    <div className="ProjectLibrary">
      {
        projects.map((project, idx) => 
          <ProjectCard key={idx} name={project.name} description={project.description} url={project.url} blogUrl={project.blogUrl} imageUrl={project.imageUrl} />
        )
      }
        
    </div>
  );
}

export default ProjectLibrary;
