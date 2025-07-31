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
    interval = setInterval(showNextSlide, 4000);  
  }
  resetInterval();
  
  document.querySelector("#carousel").onclick = () => {
    resetInterval();
    showNextSlide();
  };
});

