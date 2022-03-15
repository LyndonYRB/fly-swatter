/**@type {HTMLDivElement} */
const gameField = document.getElementById("gameField");
const gameCtx = gameField.getContext("2d");
GAMEFIELD_WIDTH = gameField.width = 600;
GAMEFIELD_HEIGHT = gameField.height = 500;
const numberOfFlies = 15;
const flyArray = [];

const flyImage = new Image();
flyImage.src = 'fly-sprite.gif';



let header = document.getElementById("header")
header.textContent += "kill the flies..."



class Enemy {
  constructor() {


    //this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 500;
    this.spriteHeight = 380;
    this.width = this.spriteWidth / 6;
    this.height = this.spriteHeight / 6;
    this.x = Math.random() * (gameField.width);
    this.y = Math.random() * (gameField.height);
    this.frame = 0;
  }
  update() {
    this.x += Math.random() * 10 - 5.5;
    this.y += Math.random() * 24 - 10.5;

    //this.frame > 0 ? this.frame = 0 : this.frame++;
  }
  draw() {
    gameCtx.strokeRect(this.x, this.y, this.width, this.height);
    gameCtx.drawImage(flyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
};

for (let i = 0; i < numberOfFlies; i++) {
  flyArray.push(new Enemy());
};


function flyAnimate() {
  gameCtx.clearRect(0, 0, GAMEFIELD_WIDTH, GAMEFIELD_HEIGHT);

  flyArray.forEach(enemy => {
    enemy.update();
    enemy.draw();
  })
  requestAnimationFrame(flyAnimate)
}
flyAnimate()