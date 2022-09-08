---
lastmod: 2020-06-10T21:26:53+10:00
publishdate: 2022-06-30T21:26:53+10:00
author: Dillon Hunt

title: Platformer | Dillon Hunt
project_name: Platformer
stack: Phaser.js
description: This project was designed to create a fun platformer game to be used in the classroom with youn students to teach them about geographical landmarks, countries and flags, whilst also being enjoyable and jun to play.

hero_title: Platformer
hero_description: Exploring the development of an educational Phaser.js based platformer game.

category: New Project
date_string: Jun 10 - 2020
image: img/cover.webp
live: https://dillon-hunt.com/games/platformer/version/7/index.html

draft: false
---

# Idea
The task for the platformer game was to create a fun and educational platformer for primary school aged students.

# Breakdown of The Task
The framework which is used for this project is Phaser.js which means this will be a web based JavaScript using canvas. Since the game is to be used in schools obviously there will be no or minimal violence and it needs to be quite easy to pick up and play. As for the learning objective of the game I chose a geography theme with a fun landmark backgrounds for each part of the platformer. Since it is more of a quick pickup and play game, I chose not to have levels but instead a single map that could later be turned into a endless generation map.

# Story
{{< img src="img/story.png" alt="story" >}}
The player is exploring the world we live in by passing through different countries and visiting famous landmarks along the way. As the player progresses the game becomes harder creating stress so that the player feels a greater sense of achievement when they complete the game.

# Learning Objective
{{< img src="img/learning.png" alt="Learning" >}}
This game aims to teach the lower primary group about the countries, flags and landmarks of the world through a fun and interactive platformer game. The game also helps to develop their patience and ability to cope with stress in a fun and engaging environment.

# Goal
The goal of the game is to reach the end of the platformer which is slowly increasing in difficulty while collecting as many coins as possible to achieve the maximum possible score.

# Enemy
{{< img src="img/enemy.png" alt="enemy" >}}
Instead of a traditional moving enemy, I chose to simply add in some challenges like spikes and tough jumps to put pressure on the player and keep them engaged with the game as it gives them the sense that they have reached a point and can't give up.
Bonus

There are higher value coins in places harder to reach so that the player is rewarded for his/her efforts and encouraged to take risks and explore further into the game and find hidden secrets throughout it.
Audience

The target audience for this game is lower primary. The game aims to engage them with simplistic design and intuitive controls. The assets & tiles change throughout the map for a more engaging experience. The game challenges their problem-solving skills as well as teaching basic geography. The game also has some hidden features like secret powerups and jetpacks that the player will discover the more that they explore the game.

# Bonus
There are higher value coins in places harder to reach so that the player is rewarded for his/her efforts and encouraged to take risks and explore further into the game and find hidden secrets throughout it.

# Audience
The target audience for this game is lower primary. The game aims to engage them with simplistic design and intuitive controls.
    The assets & tiles change throughout the map for a more engaging experience. 
    The game challenges their problem-solving skills as well as teaching basic geography. 
    The game also has some hidden features like secret powerups and jetpacks that the player will discover the more that they explore the game.

# Collecting Coins
``` js
// Player Collects a Coin
function hitStars (player, coin) {
    CoinSound.play()
    name = coin.texture.key
    coinValue = name.replace('coin-', '')
    score += parseInt(coinValue)
    coin.disableBody(true, true);
    setScore()
}
```

# Checkpoints
``` js
// Player Reaches a Checkpoint
function hitFlag(player, flag) {
    CheckpointSound.play();
    flag.disableBody(true, true);
    // Award the Player 10 Coins
    score += 10
    setScore()
    checkpointX = player.x + 8
    checkpointY = player.y
}
```

A checkpoint is located at the beginning of each 'Country' represented by their respective flag. 
They are quite close together meaning if the player makes a mistake they won't need to redo too much of their work to get back to where they are. 
This aims to minimise the frustration factor of a regular platformer game. 
The game works with a 3 life system giving them multiple chances to reach the end but at the same time still keeping the constant threat of falling.
          
