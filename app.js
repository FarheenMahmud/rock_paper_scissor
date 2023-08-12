function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}


function playRound() {
      
  
    const computerSelection = getComputerChoice();
    
    const playerSelection = prompt("Rock, paper, or scissors?");

    const choices = ["rock", "paper", "scissors"];

    const rps = choices.indexOf(playerSelection.toLowerCase());

    

   

    if (rps > -1) 
 //main conditional

    {

        if(playerSelection === "paper" && computerSelection === "rock"){
            return "You win! Paper beats Rock!";
        }
    
        else if(playerSelection === "rock" && computerSelection === "paper"){
            return "You win! Paper beats Rock!";
        }
    
        else if(playerSelection === "paper" && computerSelection === "scissors" ){
            return "You lose! Scissors beats paper!";
        }
    
        else if(playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats paper!";
        }

        else if(playerSelection === "rock" && computerSelection === "scissors"){
            return "You win! Rock beats scissors!";
        }

        else if(playerSelection === "scissors" && computerSelection === "rock"){
            return "You lose! Rock beats scissors!";
        }

        else {
            return "it's a tie!";
        }

        

    }

    else {
        alert ("Invalid choice!");
    }

  
  }

 
  console.log(playRound());