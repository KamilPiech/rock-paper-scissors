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
            console.log("Computer Won");
            return computerScore +=1;    
        } else {
            console.log("Player Won");           
            return humanScore += 1;
        }
    }

    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Player Won");
            return humanScore +=1;
        } else {
            console.log("Computer Won");
            return computerScore += 1;
        }
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Computer Won");
            return computerScore += 1;
        } else {
            console.log("Player Won");
            return humanScore += 1;
        }
    }
}

const computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

console.log(humanSelection);


let humanScore = 0;
let computerScore = 0;

console.log(computerSelection);


playRound(humanSelection, computerSelection);

console.log("Player: " + humanScore);
console.log("Computer: " + computerScore);






