let playerScore = 0;
let computerScore = 0;
let rockButton = document.getElementById("rock-pic");
let paperButton = document.getElementById("paper-pic");
let scissorsButton = document.getElementById("scissors-pic");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("comp-score");
let playerChoiceImage = document.getElementById("player-select-pic");
let computerChoiceImage = document.getElementById("comp-select-pic");
let gameWinner = document.getElementById("winner");
let rockImage = `<img src="./assets/rock-hand.png" />`;
let paperImage = `<img src="./assets/paper-hand.png" />`;
let scissorsImage = `<img src="./assets/scissors-hand.png" />`;
let restartButton = document.getElementById("play-again-btn");

function generateRandomChoice() {
  return Math.ceil(Math.random() * 3);
}

function compareChoices(playerChoice) {
  if (generateRandomChoice() == 1) {
    computerChoiceImage.innerHTML = rockImage;
    switch (playerChoice) {
      case 1:
        break;
      case 2:
        playerScore += 1;
        break;
      case 3:
        computerScore += 1;
        break;
    }
    console.log(computerChoiceImage);
  } else if (generateRandomChoice() == 2) {
    computerChoiceImage.innerHTML = paperImage;
    switch (playerChoice) {
      case 1:
        computerScore += 1;
        break;
      case 2:
        break;
      case 3:
        playerScore += 1;
        break;
    }
  } else {
    computerChoiceImage.innerHTML = scissorsImage;
    switch (playerChoice) {
      case 1:
        playerScore += 1;
        break;
      case 2:
        computerScore += 1;
        break;
      case 3:
        break;
    }
  }
}

rockButton.onclick = () => {
  let playerChoice = 1;
  playerChoiceImage.innerHTML = rockImage;
  generateRandomChoice();
  compareChoices(playerChoice);
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
  checkWinner();
};

paperButton.onclick = () => {
  let playerChoice = 2;
  playerChoiceImage.innerHTML = paperImage;
  generateRandomChoice();
  compareChoices(playerChoice);
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
  checkWinner();
};

scissorsButton.onclick = () => {
  let playerChoice = 3;
  playerChoiceImage.innerHTML = scissorsImage;
  generateRandomChoice();
  compareChoices(playerChoice);
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
  checkWinner();
};

function checkWinner() {
  if (playerScore >= 5) {
    gameWinner.innerText = "You";
    document.getElementById("end-screen").style.visibility = "visible";
    rockButton.style.visibility = "hidden";
    paperButton.style.visibility = "hidden";
    scissorsButton.style.visibility = "hidden";
  } else if (computerScore >= 5) {
    gameWinner.innerText = "Comp";
    document.getElementById("end-screen").style.visibility = "visible";
    rockButton.style.visibility = "hidden";
    paperButton.style.visibility = "hidden";
    scissorsButton.style.visibility = "hidden";
  }
}

restartButton.onclick = () => {
  window.location.href = "./game.html";
};
