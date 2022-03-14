import '../styles/BlogLibrary.css';
import BlogCard from './BlogCard'

const projects = [
  {
    url: "https:/kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "./blog/new-cooking-website",
    imageUrl: "/assets/kitchefs.png",
    imageAlt : "Recipes home page"
  },
  {
    url: "https:/addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "./blog/new-tab-page", 
    imageUrl: "/assets/newtab.png",
    imageAlt : "Firefox NewTab homepage"
  },
  {
    url: "./games/platformer/version/7/index.html",
    name: "Platformer",
    description: "A small but fun platformer game created with Phaser as a school project.",
    blogUrl: "./blog/platformer-game",
    imageUrl: "/assets/platformer.png",
    imageAlt : "Screenshot from platformer game."
  },
  {
    url: "",
    name: "RPG: Ideation",
    description: "Part 1 of the development of my top down RPG game.",
    blogUrl: "./blog/rpg-game-devlog-part-1",
    imageUrl: "",
    imageAlt : ""
  }
]


function BlogLibrary() {
  return (
    <div className="BlogLibrary">
      {
        projects.map((project, idx) => 
          <BlogCard key={idx} name={project.name} description={project.description} url={project.url} blogUrl={project.blogUrl} imageUrl={project.imageUrl} imageAlt={project.imageAlt} />
        )
      }
        
    </div>
  );
}

export default BlogLibrary;
