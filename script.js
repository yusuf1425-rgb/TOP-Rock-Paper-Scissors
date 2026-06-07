console.log("Hello World!");

let humanScore, computerScore = 0;

function getComputerChoice() { 
    let randomNum = Math.floor(Math.random() * 3);
    return getRockPaperScissors(randomNum);
}

function getRockPaperScissors(randomNum) {
    switch(randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors? \nEnter your choice:");
    return humanChoice;
}

