function getComputerChoice() {
  let randomValue = Math.random();
  if (randomValue < 1 / 3) {
    return "rock";
  } else if (randomValue < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function getHumanChoice () {
//     let humanChoice = prompt("Rock, paper or scissors?").toLowerCase()
//     return humanChoice;
// }

let getHumanChoice = () =>
  prompt("Rock,paper or scissors?").toLowerCase().trim();

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function playRound(computerChoice, humanChoice) {
    switch (computerChoice) {
      case "rock":
        if (humanChoice == "rock") {
          console.log("You both chose 'rock'. No one wins!");
        } else if (humanChoice == "paper") {
          console.log("Paper beats rock. You win!");
          humanScore++;
        } else {
          console.log("Rock beats scissors. You lose!");
          computerScore++;
        }
        break;
      case "paper":
        if (humanChoice == "rock") {
          console.log("Paper beats rock. You lose!");
          computerScore++;
        } else if (humanChoice == "paper") {
          console.log("You both chose 'paper'. No one wins!");
        } else {
          console.log("Scissors beats paper. You win!");
          humanScore++;
        }
        break;
      default:
        if (humanChoice == "rock") {
          console.log("Rock beats scissors. You win!");
          humanScore++;
        } else if (humanChoice == "paper") {
          console.log("Scissors beat paper. You lose!");
          computerScore++;
        } else {
          console.log("You both chose 'scissors'. No one wins!");
        }
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  }

  let winner;
  if (humanScore == computerScore) {
    winner = "No one";
  } else if (humanScore > computerScore) {
    winner = "You";
  } else {
    winner = "Computer";
  }
  console.log(
    `Computer score : ${computerScore}, \nYour score : ${humanScore}\n${winner} won!`
  );
}
playGame();
