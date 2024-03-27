


const buttons = document.querySelectorAll('.rpsButton');
const playerScoreDisplay = document.getElementById('player-score');
const handsDisplay = document.getElementById('hands');
const resultDisplay = document.getElementById('result');
const endGameButton = document.getElementById('endGameButton');

let playerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.value;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    displayHands(playerChoice, computerChoice);
    displayResult(result);
    updateScore(result);

    if (result !== 'Tie') {
      playGame();
    }
  });
});

endGameButton.addEventListener('click', () => {
  resetGame();
});

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) {
    return 'Tie';
  } else if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    return 'Win';
  } else {
    return 'Lose';
  }
}

function displayHands(player, computer) {
  handsDisplay.innerHTML = `🧑 Player: ${player} vs 🤖 Computer: ${computer}`;
}

function displayResult(result) {
  resultDisplay.innerHTML = `Result: ${result}`;
}

function updateScore(result) {
  if (result === 'Win') {
    playerScore++;
  }
  playerScoreDisplay.innerHTML = `Score: ${playerScore}`;
}

function resetGame() {
  playerScore = 0;
  playerScoreDisplay.innerHTML = `Score: ${playerScore}`;
  handsDisplay.innerHTML = '';
  resultDisplay.innerHTML = '';
}

function playGame() {
  // Implement logic to continue the game if needed
  // For example, you can set a maximum number of rounds or implement other conditions.
}