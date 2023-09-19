
function getComputerChoice() {
    var handSigns = ['Rock', 'Paper', 'Scissor'];
    var handSign = handSigns[Math.floor(Math.random()*handSigns.length)]
    return console.log(handSign);
}
getComputerChoice();