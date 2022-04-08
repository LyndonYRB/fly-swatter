//the field...
const gameField = document.getElementById("gameField");
let gameFieldWidth = window.innerWidth;
let gameFieldHeight = window.innerHeight;
let header = document.getElementById("header");
let button = document.createElement("button");

//playing field
gameOverPic = document.createElement("img")
gameOverPic.classList.add("gameover")
gameOverPic.src = "images/gameover.jpg"
gameField.appendChild(gameOverPic)
gameOverPic.style.display = "none"


//conditions
youWin = "none";


//cake...
let cakeDiv = document.createElement("div");
cakeDiv.classList.add("cake");
gameField.appendChild(cakeDiv);
cakePic = document.createElement("img");
cakeDiv.appendChild(cakePic);
cakePic.src = "images/chocolate-cake.png";
cakeDiv.style.position = "absolute";

//cake W x H/pos
cakeX = cakePic.x
cakeY = cakePic.y
cakeWidth = cakeDiv.width = 100;
cakeHeight = cakeDiv.height = 90;


//fly...
createFly = () => {
  let youWin = "none";
  gameOverPic.style.display = "none"
  let flyMaker = document.getElementById("flymaker")
  let flyDiv = document.createElement("div");
  flyDiv.classList.add("fly");
  reAddMaker = function () {
    gameField.appendChild(flyMaker)
  }
  flyMaker.appendChild(flyDiv)
  flyPic = document.createElement("img");
  flyDiv.appendChild(flyPic);
  flyPic.src = "images/fly-sprite.gif";
  flyDiv.style.position = "absolute";
  let removed = false
  if (removed = true) {
    reAddMaker()
  }

  // fly's W x H
  flyMaker.style.display = "block"
  flyWidth = flyDiv.width = 100;
  flyHeight = flyDiv.height = 90;



  //remove all flies from the field...
  removeFly = () => {
    gameField.removeChild(flyMaker)
    removed = true;
  }

  //the fly moves...
  flyFlying = () => {
    flyDiv.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    flyDiv.style.left = Math.floor(Math.random() * 90 + 5) + '%';

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
  }
  flyFlying()


  //kill the fly...

  flyDiv.addEventListener("click", () => {

    flyDiv.remove()
    checkFlies()
  })

}
startGame = () => {
  flyMaker = document.getElementById("flymaker")
  header.innerHTML = "kill the fly before it touches the cake...";




  createFly();

  setInterval(() => {
    let flyX = flyPic.x
    let flyY = flyPic.y
    let distanceX = flyX - cakeX;
    let distanceY = flyY - cakeY;

    let flyPathX = distanceX - 50;
    let flyPathY = distanceY - 50;

    //fly touch cake...
    if (distanceX > -60 && distanceX < 60 &&
      distanceY > -50 && distanceY < 50
    ) {
      gameOver()
      removeFly()
      console.log("TOUCH")
    }
  }, 1);

  gameOver = () => {
    youWin = false;
    gameOverPic.style.display = "block"
    header.innerHTML = "The cake's contaminated now, throw it away!!";
    gameField.appendChild(button);
    button.innerHTML = "GO AGAIN?";
  }

}
// check flies for win condition
let checkFlies = () => {
  if (document.querySelectorAll(".fly").length === 0) {
    youWin = true;
    header.innerHTML = "You did it!!";

    gameField.appendChild(button);
    button.innerHTML = "GO AGAIN?";
  }


}

//button
button.addEventListener('click', () => {

  if (youWin = true) {
    gameField.removeChild(button);
    createFly()
    createFly()

  } else if (youWin = false) {
    // flyMaker = document.getElementById("flymaker")
    createFly()


  }

});

checkHeader = () => {
  if (document.querySelectorAll(".fly").length === 0) {
    header.innerHTML = "You did it!!";
  }
  if (document.querySelectorAll(".fly").length === 1) {
    header.innerHTML = "kill the fly before it touches the cake...";
  }
  if (document.querySelectorAll(".fly").length > 1) {
    header.innerHTML = "kill the flies before they touch the cake..."
  }
}



checkHeader();
startGame();
