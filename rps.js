//My Variables
const choices = ["rock","paper", "scissors"];
const computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
let playerSelection = prompt("Do you chooose rock, paper, or scissors?");
    if (playerSelection.toLowerCase());

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

//Lets Game Loop 5 times.
function game() {
    for (let i = 0; i < 5; i++) {
        score()
    }
}
//Keeps Score and declares winner overall.
function score() { 
    playRound(playerSelection,computerSelection);
    if (playerScore>computerScore){
        console.log("Player Won");
    }
    if (computerScore>playerScore) {
        console.log("Computer Won");
    }
}
//Defines the variables of what wins    
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper"){
        result = "You Win!";
        playerScore += 1;   
        } else (computerSelection === "rock" && playerSelection === "scissors" ||
                computerSelection === "paper" && playerSelection === "rock" ||
                computerSelection === "scissors" && playerSelection === "paper"); {
        result = "You Lose!";
        computerScore += 1;
    return result;}
}


console.log(playRound(playerSelection, computerSelection));


