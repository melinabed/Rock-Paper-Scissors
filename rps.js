const choices = ["rock","paper", "scissors"];
const playerSelection = prompt();
const computerSelection = getComputerChoice();



function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]

}


function game() {
    
}




function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win!";   
        } else (computerSelection === "rock" && playerSelection === "scissors" ||
                computerSelection === "paper" && playerSelection === "rock" ||
                computerSelection === "scissors" && playerSelection === "paper"); {
        result = "You Lose!";
    return result;}
}


console.log(playRound(playerSelection, computerSelection));


//Start loop or something for the game function!!!!!!