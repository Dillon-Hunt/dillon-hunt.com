import '../styles/Hero.css';
import '../styles/Game.css';
import reactDom from 'react-dom';
//import Ball from '../scripts/Ball.js';

function Hero(props) {

    document.addEventListener('scroll', scrollHandler);

    function fadeOutOnScroll(element) {
        if (!element) {
            return;
        }
        
        var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
        var elementHeight = element.offsetHeight;
        var scrollTop = document.documentElement.scrollTop;
        
        var opacity = 1;
        
        if (scrollTop > distanceToTop) {
            opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        }
        
        if (opacity >= 0) {
            element.style.opacity = opacity;
        }
    }

    function scrollHandler() {
        fadeOutOnScroll(document.getElementsByClassName('Hero')[0]);
    }

    function getBall_x () {
        return parseFloat(getComputedStyle(document.getElementById("ball")).getPropertyValue("--x"))
    }
    
    function setBall_x (value) {
        document.getElementById("ball").style.setProperty("--x", value)
    }

    function getBall_y () {
        return parseFloat(getComputedStyle(document.getElementById("ball")).getPropertyValue("--y"))
    }
    
    function setBall_y (value) {
        document.getElementById("ball").style.setProperty("--y", value)
    }

    function isCollision(rect1, rect2) {
        return rect1.left <= rect2.right && rect1.right >= rect2.left && rect1.top <= rect2.bottom && rect1.bottom >= rect2.top
    }
    
    function updateBall(delta) {
        setBall_x(getBall_x() + (direction.x * velocity * delta))
        setBall_y(getBall_y() + (direction.y * velocity * delta))
        velocity += 0.000001 * delta
        const BallRect = document.getElementById("ball").getBoundingClientRect()
        const PlayerRect = document.getElementById("player-paddle").getBoundingClientRect()
        const ComputerRect = document.getElementById("computer-paddle").getBoundingClientRect()

        if (BallRect.bottom >= window.innerHeight || BallRect.top <= 0) {
            direction.y  *= -1
        }

        if (isCollision(BallRect, PlayerRect) || isCollision(BallRect, ComputerRect)) {
            direction.x  *= -1
        }

        if (BallRect.right >= window.innerWidth) {
            startGame = false
            document.getElementById("computer-paddle").style.backgroundColor = "#bb3d55"
            reset()
            setTimeout(() => {
                document.getElementById("computer-paddle").style.backgroundColor = "#210958"
                document.getElementById("player-paddle").style.opacity = "0"
                document.getElementById("computer-paddle").style.opacity = "0"
            }, 1000)
        } else if (BallRect.left <= 0) {
            startGame = false
            document.getElementById("player-paddle").style.backgroundColor = "#bb3d55"
            reset()
            setTimeout(() => {
                document.getElementById("player-paddle").style.backgroundColor = "#210958"
                document.getElementById("player-paddle").style.opacity = "0"
                document.getElementById("computer-paddle").style.opacity = "0"
            }, 1000)
        }
    }

    let lastTime
    let direction = { x : 0, y: 0 }
    while (Math.abs(direction.x) <= .2 || Math.abs(direction.y) >= .9) {
        const heading = Math.random() * ((2 * Math.PI) - 0) + 0
        direction = { x: Math.cos(heading), y: Math.sin(heading)}
    }
    let velocity = 0.015

    function getPlayer_y() {
        return parseFloat(getComputedStyle(document.getElementById("player-paddle")).getPropertyValue("--position"))
    }   

    function setPlayer_y (value) {
        document.getElementById("player-paddle").style.setProperty("--position", value)
    }

    function getComputer_y() {
        return parseFloat(getComputedStyle(document.getElementById("computer-paddle")).getPropertyValue("--position"))
    }   

    function setComputer_y (value) {
        document.getElementById("computer-paddle").style.setProperty("--position", value)
    }

    function updateComputer(delta) {
        setComputer_y(getComputer_y() + (0.005 * delta * (getBall_y() - getComputer_y())))
    }

    document.addEventListener("mousemove", e => {
        if (startGame) {
            setPlayer_y((e.y / window.innerHeight) * 100)
        }
    })

    function reset() {
        startGame = false
        velocity = 0.015
        direction = { x : 0, y: 0 }
        while (Math.abs(direction.x) <= .2 || Math.abs(direction.y) >= .9) {
            const heading = Math.random() * ((2 * Math.PI) - 0) + 0
            direction = { x: Math.cos(heading), y: Math.sin(heading)}
        }
        setComputer_y(50)
        setPlayer_y(50)
        setBall_x(50)
        setBall_y(52)
    }

    let startGame = false

    window.onload = () => {
        document.getElementById("ball").addEventListener("click", () => {
            startGame = true
            document.getElementById("player-paddle").style.opacity = "1"
            document.getElementById("computer-paddle").style.opacity = "1"
        })
    }

    

    function update(time) {
        if (lastTime != null && startGame) {
            const delta = time - lastTime
            updateBall(delta)
            updateComputer(delta)
        }
        lastTime = time
        window.requestAnimationFrame(update)
    }

    window.requestAnimationFrame(update)

    return (
        <div className="Hero">
            <div className="Ball" id="ball"></div>
            <div className="Paddle Left" id="player-paddle"></div>
            <div className="Paddle Right" id="computer-paddle"></div>

            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
  }
  
  export default Hero;