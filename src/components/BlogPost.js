import { useParams } from "react-router-dom";
import { CodeBlock, nord } from "react-code-blocks";
import { Helmet } from "react-helmet";
import SuggestedReadNext from "./SuggestedReadNext";
import Hero from "./Hero"
import '../styles/BlogPost.css';

var posts = {
    "platformer-game": {
      title: "Platformer",
      description: "Exploring the development of an educational Phaser.js based platformer game.",
      contents: [
        {
          heading: "Idea",
          content: 
          <>
            <p>
              The task for the platformer game was to create a fun and educational platformer for primary school aged students.
            </p>
          </>
        },
        {
          heading: "Breakdown of The Task",
          content: 
          <>
            <p>
              The framework which is used for this project is Phaser.js which means this will be a web based JavaScript using canvas. 
              Since the game is to be used in schools obviously there will be no or minimal violence and it needs to be quite easy to pick up and play. 
              As for the learning objective of the game I chose a geography theme with a fun landmark backgrounds for each part of the platformer.
              Since it is more of a quick pickup and play game, I chose not to have levels but instead a single map that could later be turned into a endless generation map.
            </p>
          </>
        },
        {
          heading: "Story",
          content:
          <>
            <img src="../assets/platformer-story.png" alt="Player character standing between buildings" class="post-image with-text-below" />
            <p>
              The player is exploring the world we live in by passing through different countries and visiting famous landmarks along the way. 
              As the player progresses the game becomes harder creating stress so that the player feels a greater sense of achievement when they complete the game.
            </p>
          </>
        },
        {
          heading: "Learning Objective",
          content:
          <>
            <img src="../assets/platformer-learning.png" alt="Country flag after checkpoint flag" class="post-image with-text-below" />
            <p>
            This game aims to teach the lower primary group about the countries, flags and landmarks of the world through a fun and interactive platformer game. 
            The game also helps to develop their patience and ability to cope with stress in a fun and engaging environment.
            </p>
          </>
        },
        {
          heading: "Goal",
          content:
          <>
            <p>
              The goal of the game is to reach the end of the platformer which is slowly increasing in difficulty while collecting as many coins as possible to achieve the maximum possible score.
            </p>
          </>
        },
        {
          heading: "Enemy",
          content:
          <>
            <img src="../assets/platformer-enemy.png" alt="Spikes for the player to avoid" class="post-image with-text-below" />
            <p>
              Instead of a traditional moving enemy, I chose to simply add in some challenges like spikes and tough jumps to put pressure on the player and keep them engaged with the game as it gives them the sense that they have reached a point and can't give up.
            </p>
          </>
        },
        {
          heading: "Bonus",
          content:
          <>
            <p>
              There are higher value coins in places harder to reach so that the player is rewarded for his/her efforts and encouraged to take risks and explore further into the game and find hidden secrets throughout it.
            </p>
          </>
        },
        {
          heading: "Audience",
          content:
          <>
            <p>
            The target audience for this game is lower primary. The game aims to engage them with simplistic design and intuitive controls.
             The assets & tiles change throughout the map for a more engaging experience. 
             The game challenges their problem-solving skills as well as teaching basic geography. 
             The game also has some hidden features like secret powerups and jetpacks that the player will discover the more that they explore the game.
            </p>
          </>
        },
        {
        heading: "Collecting Coins",
        content:
        <>
          <img src="../assets/platformer-coin.png" alt="Player with a coin" class="post-image with-code" />
          <div class="codeBlock">
            <CodeBlock
              text = {
`// Player Collects a Coin
function hitStars (player, coin) {
    CoinSound.play()
    name = coin.texture.key
    coinValue = name.replace("coin-", "")
    score += parseInt(coinValue)
    coin.disableBody(true, true);
    setScore()
}`
              }
              language = "javascript"
              theme = {nord}
              wrapLines
              style = "width: 80%;margin-left: 10%;"
              CodeBlock
            />
          </div>
        </>
      },
      {
        heading: "Checkpoints",
        content:
        <>
          <img src="../assets/platformer-checkpoint.png" alt="Player reaching a checkpoint" class="post-image with-text-below" />
          <p>
            A checkpoint is located at the beginning of each 'Country' represented by their respective flag. 
            They are quite close together meaning if the player makes a mistake they won't need to redo too much of their work to get back to where they are. 
            This aims to minimise the frustration factor of a regular platformer game. 
            The game works with a 3 life system giving them multiple chances to reach the end but at the same time still keeping the constant threat of falling.
          </p>
          <div class="codeBlock after-text">
            <CodeBlock
              text = {
`// Player Reaches a Checkpoint
function hitFlag(player, flag) {
    CheckpointSound.play();
    flag.disableBody(true, true);
    // Award the Player 10 Coins
    score += 10
    setScore()
    checkpointX = player.x + 8
    checkpointY = player.y
}`
              }
              language = "javascript"
              theme = {nord}
              wrapLines
              style = "width: 80%;margin-left: 10%;"
              CodeBlock
            />
          </div>
        </>
        }
      ],
      suggestedReadNext: {
        url: "",
        name: "RPG: Ideation",
        description: "Part 1 of the development of my top down RPG game.",
        blogUrl: "/blog/rpg-game-devlog-part-1",
        imageUrl: "",
        imageAlt: "",
        wordCount: 770,
        date: "Mar 14, 2022"
      },
    },
    "new-tab-page": {
      title: "NewTab",
      description: "Exploring the development of the Firefox new tab extension NewTab.",
      contents: [
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
          heading: "To Be Continued",
          content:
          <>
            <p>
              This page is still under construction.
            </p>
          </>
        }
      ],
      suggestedReadNext: {
        url: "",
        name: "RPG: Ideation",
        description: "Part 1 of the development of my top down RPG game.",
        blogUrl: "/blog/rpg-game-devlog-part-1",
        imageUrl: "",
        imageAlt: "",
        wordCount: 770,
        date: "Mar 14, 2022"
      },
    },
    "new-cooking-website": {
      title: "Kitchefs",
      description: "Exploring the development of the Firefox new tab extension NewTab.",
      contents: [
        {
          heading: "Project Idea",
          content: 
          <>
            <p>
              Kitchefs is a free cooking website designed to make cooking easier and funner for everyone.
            </p>
          </>
        },
        {
          heading: "To Be Continued",
          content:
          <>
            <p>
              This page is still under construction.
            </p>
          </>
        }
      ],
      suggestedReadNext: {
        url: "https:/addons.mozilla.org/en-US/firefox/addon/new_tab/",
        name: "NewTab",
        description: "An free firefox addon to improve your browser experience with a customizable dashboard.",
        blogUrl: "/blog/new-tab-page", 
        imageUrl: "/assets/newtab.png",
        imageAlt: "Firefox NewTab homepage",
        wordCount: 49,
        date: "Dec 12, 2021"
      },
    },
    "rpg-game-devlog-part-1": {
      title: "RPG Part 1: Ideation",
      description: "Part one of the RPG devlog series. Coming up with the idea and brainstorming the mechanics and storyline.",
      contents: [
        {
          heading: "Concept",
          content:
          <>
            <p>
              The idea for the game is to make a top down style rpg game.
              It is going to be built using javascript and canvas.
              I am not yet sure about the art style or storyline however I want it to have combat mechanics like a dungeon crawler where you equipt a weapon and need to fight enemies to progress.
              The game is loosely based on the Pizza Legends tutorial series by <a href="https://www.youtube.com/c/DrewConley/">Drew Conley</a>, so thanks to him for that awesome tutorial.
            </p>
          </>
        },
        {
          heading: "Brainstorming",
          content:
          <>
            <p>
              Criteria: <br />
            </p>
            <ul>
              <li>It will be story based rather than level based.</li>
              <li>The story will be the players focus, but it won't control the player. Instead they are free to do things at their own pace in the order they want. </li>
              <li>The game will have plenty of optional side stories & missions to give the player a deeper playthrough experience and better the replayability of the game.</li>
              <li>I want it to have a retro top down style while still feeling new.</li>
              <li>I would prefer it to have simple art style so that the art doesn't take up to much of the time I spend working on the game, as I am going to be doing it entirely myself.</li>
            </ul>
          </>
        },
        {

          heading: "Inspiration",
          content:
          <>
            <p>
              In order to develop an idea, I like to browse other similar projects and draw ideas from them, thinking about what features I could use in my game or could improve on, as well as what elements to avoid.
            </p>
            <img class="post-image with-unrelated-text-above" src="../assets/rpg-devlog-part-1-littlewood.jpg" alt="Screenshot from Littlewood." />
            <h3>Littlewood</h3>
            <p>
              I quite liked the very simple and flat game art from <a href="https://store.steampowered.com/app/894940/Littlewood/">Littlewood</a>, although the speech popup was way too obtrusive.
              While the style might be a little too simple for the game I want to create, a tile based demo version could be useful to cut down the initial development time.
            </p>
            <div class="slideshow">
              <img class="post-image with-unrelated-text-above" src="../assets/rpg-devlog-part-1-spindle.gif" alt="Screenshot from Spindle." />
              <img class="post-image with-unrelated-text-above" src="../assets/rpg-devlog-part-1-spindle-2.gif" alt="Screenshot from Spindle." />
            </div>
            <h3>Spindle</h3>
            <p>
              I loved the art style and animations from <a href="https://store.steampowered.com/app/1386750/Spindle/">Spindle</a>, while it is probably well beyond my ability to have as much animation as this, I certainly could have some cool movement and action animations. 
              I also like the attention to detail of the footprints in the snow.
              I also think that having a mechanic to be able to chop down some trees could provide opportunity to unlock secrets, perhaps even having some trees require a particular tool to be cut.
            </p>
            <img class="post-image with-unrelated-text-above" src="../assets/rpg-devlog-part-1-moonlighter.jpg" alt="Screenshot from Moonlighter." />
            <h3>Moonlighter</h3>
            <p>
              While the art from <a href="https://store.steampowered.com/app/606150/Moonlighter/">Moonlighter</a> is pretty good, I especially liked it's crafting and inventory system. 
              I would like to implement some sort of crafting or upgrade system similar to this for tools and other items.
            </p>
            <img class="post-image with-unrelated-text-above" src="../assets/rpg-devlog-part-1-garden-story.png" alt="Screenshot from Garden Story." />
            <h3>Garden Story</h3>
            <p>
              I was interested in the flat, colorful art implemented in <a href="https://store.steampowered.com/app/1062140/Garden_Story/">Garden Story</a>. 
              I quite liked the idea of a backpack however I thought the screen was a little bit busy.
              The fishing game mechanic seemed fun as well, I also noticed it in Spindle, so that could be something to add.
            </p>
          </>
        },
        {

          heading: "The Idea",
          content:
          <>
            <p>
              The game is going to be a top down game with grid based movement. 
              It will be set around current year. 
              Some of the game mechanics I want to include are an inventory system, health & hunger bars and interactive game objects & NPCs.
              I want the game to start in a forest so you can explore small campgrounds and cabins making the game feel more personal rather than having it set in a city or town. 
              This being said I want it to build up to you owning your own house that you can decorate & personalise to your taste.
            </p>
          </>
        },
        {
          heading: "Creating a Story",
          content:
          <>
            <p>
              This section will be updated as the game is developed to reflect the complete storyline.
              <span class="text-update"> Any additionally added story will look like this.</span>
            </p>
            <h3 class="with-text-above">Main Story</h3>
            <p>
              The player's plane crashes in a dense forest, luckily there is a small campground nearby.
              In the campground you one of the campers give you a map to the nearest town.
              While your are exploring the forest you come across some small cabins and meet different people who will ask if you want to do something for a reward.
              When you reach the town you explore different areas and other surrounding towns.
              As you're exploring the town you find something that just doesn't add up.
              You find that the mayor of the town has plans to have it demolished to build a mine.
              Can you team up with the people you meet to find proof of the plans before it's too late.
            </p>
            <h3 class="with-text-above">Side Stories, Missions & mechanics</h3>
            <p>
              There will be an ability to go fishing in lakes and ponds. The fish you collect can be eaten or traded with the fisherman for items.
              <br /><br />
              There will be trees and rocks that you need a certain tool of a particular level to cut down in order to reach an new location.
              This will give the ability to have some control over areas which the player has access while not restricting the player to a set path.
            </p>
          </>
        }
  
      ],
      suggestedReadNext: {
        url: "",
        name: "RPG: Design",
        description: "Part 2 of the development of my top down RPG game.",
        blogUrl: "/blog/rpg-game-devlog-part-2",
        imageUrl: "",
        imageAlt: "",
        wordCount: 311,
        date: "Mar 17, 2022"
      },
    },
    "rpg-game-devlog-part-2": {
      title: "RPG Part 2: Design & Prototype",
      description: "Part one of the RPG devlog series. Coming up with the idea and brainstorming the mechanics and storyline.",
      contents: [
        {
          heading: "Initial Design",
          content:
          <>
            <img class="post-image with-text-below" src="../assets/rpg-devlog-part-2-initial-design.svg" alt="Basic initial figma design." />
            <p>
              Before I started making any sprites I made a quick mockup in <a href="https://www.figma.com/">Figma</a> of what I would like it to kind of look like when the tiles are added to the game.
            </p>
          </>
        },
        {
          heading: "Creating the Tiles",
          content:
          <>
            <img class="post-image with-text-below" src="../assets/rpg-devlog-part-2-initial-tilesheet.png" style={{ imageRendering: "pixelated" }} alt="Barrier, Grass and Grass Path tile designs." />
            <p>
              Personally I like to use <a href="https://www.adobe.com/au/products/photoshop.html">Photoshop</a> to create my tiles, however many people like to use tileset / sprite specific software like <a href="https://www.aseprite.org/">Aseprite</a>.
              I just created the barrier, grass and grass path to start so that I can test collision and tile rendering, obviously more tiles are going to be added and they won't like like this in the final game but for testing they will do fine.
            </p>
          </>
        },
        {
          heading: "Adding Sprites and Movement",
          content:
          <>
            <video class="post-image with-text-below" loop autoPlay title="Demo of movement and collisions in prototype.">
              <source src="../assets/rpg-devlog-part-2-movement.mp4" type="video/mp4"></source>
            </video>
            <p>
              I programmed in some of the core components into the game like movement, sprite rendering and collisions. 
              Despite choosing to use grid based movement in my ideation, I ended up adding eight directional movement to give the player more freedom.
              This fits with the goal of the game which is that the player is in control.
              To save time I downloaded the player sprite from <a href="https://itch.io/">itch.io</a>, to thanks to <a href="https://vryell.itch.io/tiny-adventure-pack">Vryell</a> for making that awesome sprite.
              I will be eventually making all my own sprites but it is helpful to not spend to much time on them in the early stages of development.
            </p>
          </>
        },
        {
          heading: "Generating Tilemap from JSON",
          content:
          <>
          <div class="codeBlock after-text before-text">
            <CodeBlock
              text = {
`{
  "id": "DemoSceneOne",
  "gameObjects": {
      "player": {
          "id": "player",
          "type": "character",
          "playerControlled": true,
          "position": {
              "x": 16,
              "y": 16,
              "facing": "down"
          },
          "src": "/Assets/Sprites/player-large.png"
      }
  },
  "tiles": {
      "0-0": {
          "src": "/Assets/Tiles/barrier.png",
          "type": "barrier",
          "layer": "bottom"
      },
      "0-1": {
          "src": "/Assets/Tiles/barrier.png",
          "type": "barrier",
          "layer": "bottom"
      },
      "0-2": {
          "src": "/Assets/Tiles/barrier.png",
          "type": "barrier",
          "layer": "bottom"
      },
      "0-3": {
          "src": "/Assets/Tiles/barrier.png",
          "type": "barrier",
          "layer": "bottom"
      },
      "0-4": {
          "src": "/Assets/Tiles/barrier.png",
          "type": "barrier",
          "layer": "bottom"
      },
      "0-5": {
          "src": "/Assets/Tiles/barrier.png",
          "type": "barrier",
          "layer": "bottom"
      },
      { ... }
  }
}`
              }
              language = "json"
              theme = {nord}
              wrapLines
              style = "width: 80%;margin-left: 10%;"
              CodeBlock
            />
          </div>
          <p>
            This is a snippet of the json data used to load the example scene above, in my next post I will be creating a world editor that exports the map into a file that looks like this.
            You can see all the game objects are specified with an id, type, and position.
            While there is only the player at the moment, other types of game objects could include NPCs, doors, cupboards or any other object that the player can interact with.
            The tiles are named with the grid position and the image, tile type and layer is specified.
          </p>
          </>
        },
        {
          heading: "Adding Moveable Logs & Rocks",
          content:
          <>
            <video class="post-image with-text-below" loop autoPlay title="Demo of player solving log puzzle.">
              <source src="../assets/rpg-devlog-part-2-moveable-logs.mp4" type="video/mp4"></source>
            </video>
            <p>
              I decided to add a puzzle element to the game.
              The idea for these puzzles were to be relaxing while still making the player carefully consider their movements.
              Future puzzles where it is possible to make a mistake and get stuck will have a restart puzzle button so the player can start fresh and solve the puzzle. 
              Future puzzles might also have additional elements like switches, buttons, doors ect.
            </p>
          </>
        },
        {
          heading: "Refinements",
          content:
          <>
            <p>
              After some iterating I chose to move back to grid based movement so that the moving log / rock puzzles could be incorporated.
              The logs and rocks were added to the game objects part of the json.
              The "src" item was removed from the tile as every tile with the same type had the same source anyway.
              I removed the dots from the grass and path tiles and instead added text in the corner that details the player's x & y position.
            </p>
          </>
        },
      ],
      suggestedReadNext: {
        url: "./games/platformer/version/7/index.html",
        name: "Platformer",
        description: "A small but fun platformer game created with Phaser as a school project.",
        blogUrl: "/blog/platformer-game",
        imageUrl: "/assets/platformer.png",
        imageAlt: "Screenshot from platformer game.",
        wordCount: 502,
        date: "Nov 20, 2021"
      },
    }
  }

function BlogPost() {
    var { url } = useParams()
    const content = posts[url] !== undefined ? (
      <>

        {
          posts[url].contents.map((post, idx) => 
            <div className="post" key={idx}>
              <h2>{post.heading}</h2>
              {post.content}
            </div>
          )
        }

        {
          posts[url].suggestedReadNext !== undefined ? (
            <>
              <h2>What to read next?</h2>
              <SuggestedReadNext name={posts[url].suggestedReadNext.name} description={posts[url].suggestedReadNext.description} url={posts[url].suggestedReadNext.url} blogUrl={posts[url].suggestedReadNext.blogUrl} imageUrl={posts[url].suggestedReadNext.imageUrl} imageAlt={posts[url].suggestedReadNext.imageAlt} wordCount={posts[url].suggestedReadNext.wordCount} date={posts[url].suggestedReadNext.date} />
            </>
          ) : 
          (<></>)
        }

        <img id="wave" src="/assets/wave.png" />

        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
      </>) :
      (<></>)

    return (
      <div className="BlogPost">
          <Helmet>
            <title>{posts[url] !== undefined ? posts[url].title + " | Dillon Hunt" : "404"}</title>
            <meta name="description" content={posts[url] !== undefined ? posts[url].description : "404 - That's An Error"} />
          </Helmet>
          <Hero title={posts[url] !== undefined ? posts[url].title : "404"} subtitle={posts[url] !== undefined ? "A Post By Dillon Hunt." : "Page Not Found"}/>
          {content}
      </div>
    );
  }
  
  export default BlogPost;