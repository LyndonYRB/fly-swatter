/**@type {HTMLDivElement} */
const gameField = document.getElementById("gameField");
const gameCtx = gameField.getContext("2d");
GAMEFIELD_WIDTH = gameField.width = 600;
GAMEFIELD_HEIGHT = gameField.height = 500;
const numberOfFlies = 15;
const flyArray = [];

gameFrame = 0;


let header = document.getElementById("header")
header.textContent += "kill the flies..."



class Enemy {
  constructor() {

    this.image = new Image();
    this.image.src = 'fly-sprite.gif'
    //this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 500;
    this.spriteHeight = 380;
    this.width = this.spriteWidth / 6;
    this.height = this.spriteHeight / 6;
    this.x = Math.random() * (gameField.width - this.width);
    this.y = Math.random() * (gameField.height - this.height);
    this.newX = Math.random() * (gameField.width - this.width);
    this.newY = Math.random() * (gameField.height - this.height);
    this.frame = 0;
    this.wingSpeed = Math.floor(Math.random() * 3 + 1);

  }
  update() {

    // this.x = 0;
    // this.y = 0;

    if (gameFrame % this.wingSpeed === 0) {
      this.frame > 1 ? this.frame = 0 : this.frame++;
    }

  }
  draw() {

    gameCtx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
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
  });
  gameFrame++;
  requestAnimationFrame(flyAnimate)
}
flyAnimate()