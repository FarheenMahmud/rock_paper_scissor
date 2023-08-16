function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

//ADD FIVE ROUND LOOP AND TERMINATE IT TO DECLARE THE WINNER

function playRound(playerSelection, computerSelection) {
      
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


  function game(){
    
 let playerScore = 0;
 let computerScore = 0;

 for(let round = 1; round <= 5; round++){

    const computerSelection = getComputerChoice();
    const playerSelection =  prompt(`Round ${round}: Rock, paper, or scissors?`);

    const result = playRound(playerSelection, computerSelection);

    if(result.includes("win")){
        playerScore++;
    }

    else if(result.includes("lose")){
        computerScore++;
    }
    
    console.log(result);
 }

    if(playerScore > computerScore){
        return "YOU WON THE GAME! OMEDETOU! (* ^ ω ^) "
    }

    else if (playerScore < computerScore) {
        return "YOU LOSE! (*μ_μ)"
    }
    
    else if (playerScore = computerScore) {
        return "IT'S A TIE! (￣▽￣)"
    }

  }


   
console.log(game());