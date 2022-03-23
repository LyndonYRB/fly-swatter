//the field...
let gameField = document.getElementById("gameField");
let gameFieldWidth = window.innerWidth;
let gameFieldHeight = window.innerHeight;

let header = document.getElementById("header");

let button = document.createElement("button");

let gameOver = document.createElement("button");

//cake...
let cakeDiv = document.createElement("div");
cakeDiv.classList.add("cake");
gameField.appendChild(cakeDiv);
cakePic = document.createElement("img");
cakeDiv.appendChild(cakePic);
cakePic.src = "images/chocolate-cake.png";
cakeDiv.style.position = "absolute";

//fly...
createFly = () => {
  let flyDiv = document.createElement("div");
  flyDiv.classList.add("fly");
  gameField.appendChild(flyDiv);
  flyPic = document.createElement("img");
  flyDiv.appendChild(flyPic);
  flyPic.src = "images/fly-sprite.gif";
  flyDiv.style.position = "absolute";
  flyDiv.style.top = Math.floor(Math.random() * 90 + 5) + '%';
  flyDiv.style.left = Math.floor(Math.random() * 90 + 5) + '%';

  //the fly moves...

  let deltaX = 0;
  let deltaY = 0;

  gameFieldWidth = 800;//the boundaries
  gameFieldHeight = 560;//the boundaries

  function animationframe() {
    if (Math.random() > 0.95) {
      deltaX = Math.floor(Math.random() * 10);
      deltaY = Math.floor(Math.random() * 10);

      if (Math.random() < 0.5) {
        deltaX *= -1;
      }

      if (Math.random() < 0.5) {
        deltaY *= -1;
      }
    }
    flyDiv.style.top = '' + Math.min(Math.max(parseInt(flyDiv.style.top) + deltaY, 0), gameFieldHeight - 110) + 'px';
    flyDiv.style.left = '' + Math.min(Math.max(parseInt(flyDiv.style.left) + deltaX, 0), gameFieldWidth - 180) + 'px';
    window.requestAnimationFrame(animationframe);
  }
  window.requestAnimationFrame(animationframe);

  //kill the fly...

  flyDiv.addEventListener("click", () => {

    setTimeout(() => flyDiv.remove(), 100);
    setTimeout(() => checkFlies(), 100);
  })
  return flyDiv
}
startGame = () => {
  header.innerHTML = "kill the fly before it touches the cake...";
  createFly();
}
// the win condition
let checkFlies = () => {
  if (document.querySelectorAll(".fly").length === 0) {
    header.innerHTML = "You did it!!";
    gameField.appendChild(button);
    button.innerHTML = "GO AGAIN?";
    console.log("gameover");
  }
}
button.addEventListener('click', () => {
  for (let i = 0; i < 3; i++); {
    createFly();
    createFly();
    header.innerHTML = "kill the flies before they touch the cake...";
    gameField.removeChild(button);
  }
});

startGame();

