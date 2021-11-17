import '../styles/Hero.css';

function Hero() {

    var Hero = document.getElementsByClassName('Hero')[0];

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
        fadeOutOnScroll(Hero);
    }

    window.addEventListener('scroll', scrollHandler);


    return (
      <div className="Hero">
          <h1>Hello, I am Dillon Hunt.</h1>
          <h2>But if your here you probably already knew that.</h2>
      </div>
    );
  }
  
  export default Hero;