window.onload = function () {
  //playing field
  const body = document.body;
  field = document.getElementById("gameField");
  console.log(body);
  GAMEFIELD_WIDTH = gameField.width = 600;
  GAMEFIELD_HEIGHT = gameField.height = 500;
  console.log(body);
  console.log(gameField.width)
  console.log(gameField.height)

  // the flies

  createDuck = () => {
    let duckChara = document.createElement('div');
    duckChara.classList.add('fly');
    document.getElementById("gameField").appendChild(duckChara);


    moveDuckChara = (duckChara) => {
      let moveUp = Math.random() * field.height;
      let moveLeft = Math.random() * field.width;
      duckChara.style.top = moveUp + 'px';
      duckChara.style.left = moveLeft + 'px';
    }
    moveDuckChara(duckChara)

    setInterval(() => moveDuckChara(duckChara), 1500)

    duckChara.addEventListener('click', () => {
      duckChara.classList.add('shot');
      let duckShot = document.querySelector(".shot");
      setTimeout(() => duckShot.remove(), 100)
      setTimeout(() => checkForWinner(), 100)
    })
    return duckChara
  }

  for (let i = 0; i < 6; i++) {
    createDuck();
  }


  let liveDucks = document.querySelectorAll('.duck')
  function checkForWinner() {
    if (liveDucks.length === 0) {
      window.alert("YOU WIN!")
    }

  }

};
