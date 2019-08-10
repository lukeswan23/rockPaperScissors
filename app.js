const gameEls = document.querySelector(".rps__game");
const displayMovesEls = document.querySelector(".rps__displayMove");
const chooseMoveEls = document.querySelector(".rps__chooseMove");
let resultText = document.querySelector(".rps__game__result").childNodes[1];

//listener for the img, passes on the alt text which is used to identify the move chosen
const chooseMove = () => {
  displayMovesEls.addEventListener("click", function(event) {
    if (event.target.tagName == "IMG") {
      console.log(gameEls.childNodes);
      let userHand = event.target.alt;

      game(playerMove(userHand), cpuMove());
    }
  });
};

const gameLogic = (moveOne, moveTwo) => {
  if (moveOne == moveTwo) {
    return (resultText.textContent = "You Tie!");
  }

  if (moveOne == "paper") {
    if (moveTwo == "scissors") {
      return (resultText.textContent = `You lose to ${moveTwo}!`);
    }
    return (resultText.textContent = `You win with ${moveOne}!`);
  }
  if (moveOne == "scissors") {
    if (moveTwo == "rock") {
      return (resultText.textContent = `You lose to ${moveTwo}!`);
    }
    return (resultText.textContent = `You win with ${moveOne}!`);
  }
  if (moveOne == "rock") {
    if (moveTwo == "paper") {
      return (resultText.textContent = `You lose to ${moveTwo}!`);
    }
    return (resultText.textContent = `You win with ${moveOne}!`);
  }
};

const game = (player, cpu) => {
  const playerImg = gameEls.childNodes[1];
  const cpuImg = gameEls.childNodes[3];
  if (playerImg.classList.contains("hiddenImg")) {
    playerImg.classList.remove("hiddenImg");
    cpuImg.classList.remove("hiddenImg");
  }

  gameLogic(player, cpu);

  playerImg.src = `img/${player}.png`;
  cpuImg.src = `img/${cpu}.png`;
};

const cpuMove = () => {
  let choice = 1 + Math.floor(Math.random() * 3);
  console.log(choice);
  switch (choice) {
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "rock";
      break;
  }
};

const playerMove = moveId => {
  if (moveId == "paper") {
    return "paper";
  } else if (moveId == "scissors") {
    return "scissors";
  } else {
    return "rock";
  }
};

chooseMove();