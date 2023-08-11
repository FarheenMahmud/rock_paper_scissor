getComputerChoice(){

}


function game(){

    function playRound(playerSelection, computerSelection){
       

        if(playerScore === 5 || computerScore ===5){
            declareWinner();
         }
    }

}




const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));