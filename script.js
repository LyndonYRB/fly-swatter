/**@type {HTMLDivElement} */
const gameField = document.getElementById("gameField");
const gameCtx = gameField.getContext("2d");
GAMEFIELD_WIDTH = gameField.width = 600;
GAMEFIELD_HEIGHT = gameField.height = 500;

let header = document.getElementById("header")
header.textContent += "kill the flies..."


class Enemy {
  constructor() {
    this.x = 10;
    this.y = 50;
    this.width = 50;
    this.height = 50;
  }
  update() {
    this.x++;
    this.y++;
  }
  draw() {
    gameCtx.fillRect(this.x, this.y, this.width, this.height);
  }
};
const flyObject = new Enemy();


function flyAnimate() {
  gameCtx.clearRect(0, 0, GAMEFIELD_WIDTH, GAMEFIELD_HEIGHT);
  flyObject.update();
  flyObject.draw();
  requestAnimationFrame(flyAnimate)
}
flyAnimate()