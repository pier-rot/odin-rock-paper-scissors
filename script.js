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
  
  const result = document.querySelector("#result");
  const score = document.querySelector("#score");

  function playRound(computerChoice, humanChoice) {
    switch (computerChoice) {
      case "rock":
        if (humanChoice == "rock") {
          result.textContent =("You both chose 'rock'. No one wins!");
        } else if (humanChoice == "paper") {
          result.textContent =("Paper beats rock. You win!");
          humanScore++;
        } else {
          result.textContent =("Rock beats scissors. You lose!");
          computerScore++;
        }
        break;
      case "paper":
        if (humanChoice == "rock") {
          result.textContent =("Paper beats rock. You lose!");
          computerScore++;
        } else if (humanChoice == "paper") {
          result.textContent =("You both chose 'paper'. No one wins!");
        } else {
          result.textContent =("Scissors beats paper. You win!");
          humanScore++;
        }
        break;
      default:
        if (humanChoice == "rock") {
          result.textContent =("Rock beats scissors. You win!");
          humanScore++;
        } else if (humanChoice == "paper") {
          result.textContent =("Scissors beat paper. You lose!");
          computerScore++;
        } else {
          result.textContent =("You both chose 'scissors'. No one wins!");
        }
    }
  }
  
  const rpsButtons = [document.querySelector("#rock"), document.querySelector("#paper"), document.querySelector("#scissors")];
  const rps = ['rock', 'paper', 'scissors'];
  let userChoice;

  for (let i = 0; i < 3; i++) {
    rpsButtons[i].addEventListener("click", () => { 
      playRound(getComputerChoice(), rps[i]);

      if (computerScore == 5) {
        score.textContent = (
          `Computer score : ${computerScore}, \nYour score : ${humanScore}\nComputer won!`
        );
      } else if (humanScore == 5) {
        score.textContent = (
          `Computer score : ${computerScore}, \nYour score : ${humanScore}\nYou won!`
        );
      } else {
        score.textContent = (
          `Computer score : ${computerScore}\nYour score : ${humanScore}\nNo one won yet!`
        );
      }

    });
  }

  
  
}
playGame();
