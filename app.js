function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}


function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection === rock && computerSelection === paper){
        return "You win! Paper beats Rock!"
    }

    else if(playerSelection === paper && computerSelection === rock){
        return "You lose! Rock beats paper!"
    }

    else if(playerSelection === "Paper beats rock!")

  }

   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();

  console.log(getComputerChoice());