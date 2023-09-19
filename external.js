
function getComputerChoice() {
    var handSigns = ['Rock', 'Paper', 'Scissor'];
    var handSign = handSigns[Math.floor(Math.random()*handSigns.length)]
    return handSign;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie !!!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        console.log("You Win! Rock beats Scissor");
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        console.log("You Lose! Scissor beats Paper");
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissor");
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        console.log("You Win! Scissor beats Paper");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
    } else {
        console.log("Error");
    }
    
    
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

