window.addEventListener("load", function() {

  // Screenshot Carousel
  const slides = document.querySelectorAll('.carousel-slide');
  document.querySelector("#carousel-page-total").innerHTML = slides.length;

  let current = 0;

  function showNextSlide(prev = false) {
    slides[current].classList.remove('active');
    if (prev) {
      current = (current - 1) < 0 ? slides.length - 1 : current - 1;
    } else {
      current = (current + 1) % slides.length;
    }
    document.querySelector("#carousel-page-current").innerHTML = current + 1;
    slides[current].classList.add('active');
  }

  let interval;
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNextSlide, 4000);  
  }
  
  // Automatically start carousel once it's visible
  new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      resetInterval();
      observer.unobserve(entry.target);
      console.log('Screenshot carousel started');
    }
  }, {
    threshold: 0.1
  }).observe(document.querySelector('#carousel'));
  
  // Manual slide changing
  function manualSlideChange(prev = false) {
    resetInterval();
    showNextSlide(prev);
  }
  
  document.querySelector("#carousel .carousel-container").onclick = () => {
    manualSlideChange();
  };
  document.querySelector("#carousel-prev").onclick = () => {
    manualSlideChange(true);
  };
  document.querySelector("#carousel-next").onclick = () => {
    manualSlideChange();
  };

  // Meme when clicking on Sonic gif
  let explosion = new Image();
  explosion.src = "meme/explosion.gif?" + Math.random();
  let sfx = new Audio("meme/explosion.ogg");
  document.querySelector("#sonic-upside-down").onclick = (e) => {
    if (!e.target.classList.contains("exploded")) {
      e.target.classList.add("exploded");
      e.target.title = "Look what you've done...";
      e.target.src = explosion.src;
      sfx.play();

      document.body.classList.add("frantic");
    }
  };
});

