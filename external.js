let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const handSigns = ['rock', 'paper', 'scissors'];
    const handSign = handSigns[Math.floor(Math.random()*handSigns.length)]
    return handSign;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'It\'s a Tie!'

    
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return 'You Win! Rock beats Scissors'

        
      
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return 'You Lose! Scissor beats Paper'
      
      
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
       computerScore++;
       return 'You Lose! Rock beats Scissors'

        
   
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return 'You Win! Scissor beats Paper'
    
      
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       computerScore++;
        return 'You Lose! Paper beats Rock'
      
       
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return 'You Win! Paper beats Rock'
       
    }
        return 'Error!'
    

}


function game() {
    
    while (playerScore < 5 && computerScore < 5) { 
    playerSelection = prompt("Choose sign! ('Rock', 'Paper', 'Scissors') ");
    console.log(playRound(playerSelection, getComputerChoice()));
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
}
if (playerScore == 5) {
    console.log('You Win!')
} else {
    console.log('You Lose!');
}
}

game();