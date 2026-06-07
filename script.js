console.log("Hello World!");

let humanScore, computerScore = 0;

function getComputerChoice() { 
    let randomNum = Math.floor(Math.random() * 3);
    return getRockPaperScissors(randomNum);
}

function getRockPaperScissors(randomNum) {
    switch(randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors? \nEnter your choice:");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice == "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice == "paper")){
        humanScore++;
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
    } else {
        computerScore ++;
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
    }    
}

function capitalize(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
