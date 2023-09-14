const choices = ["rock", "paper", "scissors"];
const playerSelection = "rock";
const computerSelection = getComputerChoice();
const score = playRound();

let playerScore = 0;
let computerScore = 0;

function game(playerScore, computerScore) {
    let finalResult;
    for (let score = 0; score <= 5; score++) {
        if (playerScore == 5) {
        finalResult = "Player won the game"
        } else if (computerScore == 5) {
        finalResult = "Computer won the game"
        }
        }
        return finalResult;
}

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)];
}   


function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock")) {
                playerScore = ++playerScore;
                result = "Player Wins";
    } else if  ((computerSelection === "rock" && playerSelection === "scissors") ||
                (computerSelection === "scissors" && playerSelection === "paper") ||
                (computerSelection === "paper" && playerSelection === "rock")) {
                computerScore = ++computerScore;
                result = "Computer Wins";
        }
        return result;
}

console.log(game(playerScore, computerScore));
console.log(playRound(playerSelection, computerSelection));