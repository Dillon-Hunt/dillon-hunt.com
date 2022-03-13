import { useParams } from "react-router-dom";
import { CodeBlock, nord } from "react-code-blocks";
import { Helmet } from "react-helmet";
import Hero from "./Hero"
import '../styles/BlogPost.css';

var posts = [
    {
      title: "Platformer",
      description: "Exploring the development of an educational Phaser.js based platformer game.",
      content: [
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
            <img src="../assets/platformer-story.png" alt="Story" class="post-image with-text" />
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
            <img src="../assets/platformer-learning.png" alt="Country Flag" class="post-image with-text" />
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
            <img src="../assets/platformer-enemy.png" alt="Spikes" class="post-image with-text" />
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
          <img src="../assets/platformer-coin.png" alt="Coins" class="post-image with-code" />
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
        <img src="../assets/platformer-checkpoint.png" alt="Checkpoint" class="post-image with-text" />
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
      ]
    },
    {
      title: "NewTab",
      description: "Exploring the development of the Firefox new tab extension NewTab.",
      content: [
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
        heading: "Success Criteria",
        content:
        <>
          <p>
            ygvbkuy <strong>bvuyftyfvkyu,</strong> gvcjytuk yfu56 yugviyuguv
          </p>
        </>
      }
      ]
    }
]

function BlogPost() {
    var { id } = useParams()
    id = parseInt(id)
    const content = posts.length >= id + 1 ? (
      <>

        {
          posts[id].content.map((post, idx) => 
            <div className="post" key={idx}>
              <h2>{post.heading}</h2>
              {post.content}
            </div>
          )
        }

        <img id="wave" src="/assets/wave.png" />

        <footer>
            <h1>Contact Me</h1>
            <p>admin@dillon-hunt.com</p>
        </footer>
      </>) :
      (<>
      </>)

    return (
      <div className="BlogPost">
          <Helmet>
            <title>{posts[id].title} | Dillon Hunt</title>
            <meta name="description" content={posts.length >= id + 1 ? posts[id].description : "404 - That's An Error"} />
          </Helmet>
          <Hero title={posts.length >= id + 1 ? posts[id].title : "404"} subtitle={posts.length >= id + 1 ? "A Post By Dillon Hunt." : "Page Not Found"}/>
          {content}
      </div>
    );
  }
  
  export default BlogPost;