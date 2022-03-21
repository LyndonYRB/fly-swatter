
let gameField = document.getElementById("gameField");



let cake = document.createElement("div");
cake.classList.add("cake")
gameField.appendChild(cake)



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

  let deltaX = 0;
  let deltaY = 0;



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
    flyDiv.style.top = '' + Math.min(Math.max(parseInt(flyDiv.style.top) + deltaY, 0), window.innerHeight - 170) + 'px';
    flyDiv.style.left = '' + Math.min(Math.max(parseInt(flyDiv.style.left) + deltaX, 0), window.innerWidth - 110) + 'px';

    window.requestAnimationFrame(animationframe);


  }

  window.requestAnimationFrame(animationframe);
}

createFly()

