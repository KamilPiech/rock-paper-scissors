function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanInput = prompt("What's your choice?").toLowerCase();
    
    if (humanInput == "rock" || humanInput == "paper" || humanInput == "scissors") {
        return humanInput;
    } else {
        console.log("Wrong input, try again!");
        return getHumanChoice();
    }
}


function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("Remis");
    }

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("Paper beats rock! Computer won the round!");
            return computerScore += 1;    
        } else {
            console.log("Scissors beat paper! Player won the round!");           
            return humanScore += 1;
        }
    }

    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Paper beats rock! Player won the round!");
            return humanScore += 1;
        } else {
            console.log("Scissors beat paper! Computer won the round!");
            return computerScore += 1;
        }
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Rock beats scissors! Computer won the round!");
            return computerScore += 1;
        } else {
            console.log("Scissors beat paper! Player won the round!");
            return humanScore += 1;
        }
    }
}

function playGame(rounds) {
    for (let i = 1; i <= rounds; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        playRound(humanSelection, computerSelection);
        
        console.log("Player: " + humanScore);
        console.log("Computer: " + computerScore);

    }

    if (humanScore > computerScore) {
        console.log("Player won the game!");      
    } else if (humanScore <computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("Draw!!!");    
    }
}

let humanScore = 0;
let computerScore = 0;

playGame(5);







