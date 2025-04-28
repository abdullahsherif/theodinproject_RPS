function getComputerChoice(){
    let op = Math.random()

    if(op <= 1/3){
        return "Rock";
    }else if(op <= 2/3){
        return "Paper";
    }else return "Scissors";
}

function getHumanChoice(){
    let op = prompt("What is your choice?");

    return op;
}

function playGame(){
    function playRound(computerChoice , humanChoice){
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();
    
        if(humanChoice === computerChoice)
            return "Tie!";
        else if(humanChoice === "ROCK"){
            if(computerChoice === "PAPER"){
                computerScore++;
                return "YOU LOST!";
            }
            else {
                humanScore++;
                return "YOU WON!";
            }
        }else if(humanChoice === "PAPER"){
            if(computerChoice === "SCISSORS"){
                computerScore++;
                return "YOU LOST!";
            }
            else {
                humanScore++;
                return "YOU WON!";
            }
        }else if(humanChoice === "SCISSORS"){
            if(computerChoice === "ROCK"){
                computerScore++;
                return "YOU LOST!";
            }
            else {
                humanScore++;
                return "YOU WON!";
            }
        }
    }

    let humanScore = 0 , computerScore = 0;
    
    for(let i = 0 ; i < 5 ;i ++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    console.log("you won " + humanScore + " Rounds to " + computerScore);
}
playGame();