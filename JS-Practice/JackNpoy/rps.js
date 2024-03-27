const buttons = document.querySelectorAll(".rpsButton");
const scoreBoard = document.getElementById("player-score");
const picks = document.getElementById("hands");
const results = document.getElementById("result");
const end = document.getElementById("endGameButton");

let Scoress = 0;

buttons.forEach(button => {
  button.addEventListener("click", () =>{
    const playerChoice = button.value;
    const computerChoice = compPick();

    calculateResult(playerChoice, computerChoice);
    picks.innerHTML = "🧑 Player: " + playerChoice + " vs 🤖 Computer: " + computerChoice;
  })
});


function compPick(){
  const attackChoice = ["Rock", "Paper", "Scissors"];
  const computersPick = attackChoice[Math.floor(Math.random() * 3)];

  return computersPick; 
}


function calculateResult(playerChoice, computerChoice){
  let winORlose;

  if(playerChoice == computerChoice){
    winORlose = "Draw";
  }
  else if(playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Paper" ||
          playerChoice == "Paper" && computerChoice == "Rock"){

            winORlose = "Win";
  }
  else{
    winORlose = "Lose";
  }
  
  results.innerHTML = winORlose;
  calculateScore(winORlose);
  return winORlose;
}


function calculateScore(winORlose){
  if(winORlose == "Win"){
    Scoress += 1;
  }
  else if(winORlose == "Lose"){
    if(Scoress > 0){
      Scoress -= 1;
    }
    else{
      Scoress -= 0;
    }
  }

  else{
    Scoress += 0;
  }

  scoreBoard.innerHTML = Scoress;
}


end.addEventListener("click", () =>{
  Scoress = 0;
  scoreBoard.innerHTML = "Play Again? Y/N";
  picks.innerHTML = "";
  results.innerHTML = "";
})





























// -------------------------------------------------------------------------------

// const buttons = document.querySelectorAll(".rpsButton");
// const scoreBoard = document.getElementById("player-score");
// const picks = document.getElementById("hands");
// const results = document.getElementById("result");
// const end = document.getElementById("endGameButton");

// let Scoress = 0;

// buttons.forEach(button => {
//   button.addEventListener("click", () =>{
//     const playerChoice = button.value;
//     const computerChoice = compPick();
//     calculate(playerChoice, computerChoice);
//     showPicks(playerChoice , computerChoice);
//   })
// });


// function compPick(){
//   const choices = ['Rock', 'Paper', 'Scissors'];
//   const computerChoice = choices[Math.floor(Math.random() * 3)];
//   return computerChoice;
// }

// function calculate(playerChoice, computerChoice){
//   let result;

//   if(playerChoice == computerChoice){
//     result = 'Draw!';
//   }
//   else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
//     result = "Win!";
//   }
//   else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
//     result = "Win!";
//   }
//   else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
//     result = "Win!";
//   }
//   else{
//     result = "Lose!";
//   }

//   calculateScore(result);
//   results.innerHTML = result;
//   return result;
// }


// function calculateScore(result){
//   if(result == "Win!"){
//     Scoress += 1;
//   }
//   else if(result == "Lose!"){
//     if(Scoress > 0){
//       Scoress -= 1;
//     }
//     else{
//       //Noting will do if score == 0 or below
//     }
//   }
//   else{
//     Scoress += 0;
//   }

//   scoreBoard.innerHTML = "Score: " + Scoress;
// }


// function showPicks(playerChoice , computerChoice){
//   picks.innerHTML = "🧑 Player: " + playerChoice + " vs 🤖 Computer: " + computerChoice
// }

// end.addEventListener("click", () => {
//   Scoress = 0;
//   scoreBoard.innerHTML = "Play Again? Y/N";
//   picks.innerHTML = ""
//   results.innerHTML = "";
// })