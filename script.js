let gameField = document.getElementById("gameField");

moveFly = () => {
  createFly.x += Math.random() * 5;
  createFly.x += Math.random() * 5;
}

createFly = () => {
  let flyDiv = document.createElement("div");
  flyDiv.classList.add("fly");
  gameField.appendChild(flyDiv);
  flyPic = document.createElement("img");
  flyDiv.appendChild(flyPic)
  flyPic.src = "images/fly-sprite.gif"
  flyDiv.style.position = "absolute";
  flyDiv.style.top = Math.floor(Math.random() * 90 + 5) + '%';
  flyDiv.style.left = Math.floor(Math.random() * 90 + 5) + '%';



}
animate = () => {
  setTimeout(animate, 200);
  moveFly()
}
createFly()

animate()
cake = document.createElement("div");

