console.warn("Use playGame(); to run the game.")

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice(string) {
    const playerChoice = prompt("Choose your weapon!", "Rock, Paper or Scissors!")

    return playerChoice.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    const computer = getComputerChoice();
    console.log("DEBUG: Computer Choice: " + computer);
    const player = getPlayerChoice();
    console.log("DEBUG: Player Choice: " + player);

    if (computer == player) {
        console.log(`IT'S DRAW! ${player} VS ${computer}`);
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        computerScore++
        playerScore++
    } else if (computer == "rock" && player == "paper") {
        console.log(`Player won! ${player} VS ${computer}!`);
        playerScore++
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (computer == "paper" && player == "scissors") {
        console.log(`Player won! ${player} VS ${computer}!`);
        playerScore++
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (computer == "scissors" && player == "rock") {
        console.log(`Player won! ${player} VS ${computer}!`)
        playerScore++
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else {
        console.log(`Computer won! ${computer} VS ${player}!`)
        computerScore++
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

function playGame() {

    let roundCounter = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        roundCounter++
        console.log(`Round: ${roundCounter}`);
    }

    if (roundCounter == 5) {
        console.log(`GAME ENDED!`);
        if (playerScore == computerScore) {
            console.log(`It's Draw! Computer score: ${computerScore} | Player Score: ${playerScore}`);
        } else if (playerScore > computerScore) {
            console.log(`Player won! Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        } else {
            console.log(`Computer won! Computer score: ${computerScore} | Player Score: ${playerScore}`);
        }
    }

}