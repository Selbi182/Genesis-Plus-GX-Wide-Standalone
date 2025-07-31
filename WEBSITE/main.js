window.addEventListener("load", function() {
  const slides = document.querySelectorAll('.carousel-slide');
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  let interval;
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNextSlide, 5000);  
  }
  resetInterval();
  
  document.querySelector("#carousel").onclick = () => {
    resetInterval();
    showNextSlide();
  };

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

