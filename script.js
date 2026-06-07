console.log("Hello World!");

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

