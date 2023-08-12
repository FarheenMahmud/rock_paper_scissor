function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}


function playRound(playerSelection, computerSelection) {
    
    var playerSelection = prompt("Rock, paper, or scissors?");

    const choices = ["rock", "paper", "scissors"];

    var rps = choices.indexOf(playerSelection.toLowerCase())

    

    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock!";
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You lose! Rock beats paper!";
    }

    else if(playerSelection === "paper" && computerSelection === "scissors" ){
        return "You lose! Scissors beats paper";
    }

  }

   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();

  console.log(getComputerChoice());