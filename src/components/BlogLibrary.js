import '../styles/BlogLibrary.css';
import BlogCard from './BlogCard'

const projects = [
  {
    url: "https:/kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "./000101",
    imageUrl: "/assets/kitchefs.png"
  },
  {
    url: "https:/addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "./000100", 
    imageUrl: "/assets/newtab.png"
  },
  {
    url: "./games/platformer/version/7/index.html",
    name: "Platformer",
    description: "A small but fun platformer game created with Phaser as a school project.",
    blogUrl: "./000011",
    imageUrl: "/assets/platformer.png"
  },
  {
    url: "https:/kitchefs.github.io/",
    name: "Kitchefs",
    description: "An online cooking website for quality free baking recipes with no ads or disruptions.",
    blogUrl: "./000010",
    imageUrl: "/assets/kitchefs.png"
  },
  {
    url: "https:/addons.mozilla.org/en-US/firefox/addon/new_tab/",
    name: "NewTab",
    description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
    blogUrl: "./000001", 
    imageUrl: "/assets/newtab.png"
  },
  {
    url: "./games/platformer/version/7/index.html",
    name: "Platformer",
    description: "A small but fun platformer game created with Phaser as a school project.",
    blogUrl: "./000000",
    imageUrl: "/assets/platformer.png"
  }
]


function BlogLibrary() {
  return (
    <div className="BlogLibrary">
      {
        projects.map((project, idx) => 
          <BlogCard key={idx} name={project.name} description={project.description} url={project.url} blogUrl={project.blogUrl} imageUrl={project.imageUrl} />
        )
      }
        
    </div>
  );
}

export default BlogLibrary;
