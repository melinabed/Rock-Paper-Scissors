const choices = ["rock", "paper", "scissors"];

//Gets a random choice between rock paper, or scissors for the computer.
function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}   

//Determines the winner via choices for player and computer.
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

//Determines the result of the choices for the player and computer.
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie! Come on dude!";
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (result == "Computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

//Develops the prompt for the player to enter and determines makes the input case-insensitive.
function getplayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const playerOption = prompt("Do you choose Rock, Paper, or Scissors?");
        if (playerOption == null) {
            continue;
        }
        const optionInLower = playerOption.toLowerCase();
        if (choices.includes(optionInLower)) {
            validatedInput = true;
            return optionInLower;
        }
    }
}

//Uses the checkWinner function and loops 5 times.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getplayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer")
            computerScore++
    }
    console.log("Game Over, Refresh to play again.")
    if (playerScore > computerScore) {
        console.log("I guess you win");
    }
    else if (computerScore > playerScore) {
        console.log("Computer won, what a doofus. AI will take over one day...");
    }
    else {
        console.log("Tie Game! Not smart enough to win are you?");
    }
}

//Calls the game.
game();




