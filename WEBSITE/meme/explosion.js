window.addEventListener("load", function() {
  let explosion = new Image();
  explosion.src = "meme/explosion.gif?" + Math.random();
  let sfx = new Audio("meme/explosion.ogg");
  document.querySelector("#sonic-upside-down").onclick = (e) => {
    if (!e.target.classList.contains("exploded")) {
      e.target.classList.add("exploded");
      e.target.title = "Look what you've done...";
      e.target.src = explosion.src;
      sfx.play();
    }
  };
});    

