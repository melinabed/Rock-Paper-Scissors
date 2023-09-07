const choices = ["rock","paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
//console.log(getComputerChoice(choices));

function game() {}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Tie!";
    } else {
        result = "Something went wrong";
    }
    return result;
}
 
const playerSelection = "rock"
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));