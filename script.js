function getComputerChoice(){
    let computerChoice = Math.random();

    if(computerChoice < 1/3){
        return "rock";
    }else if (computerChoice < 2/3){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("What is your move? Rock, Paper or Scissors")
    return humanChoice.toLowerCase();
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("It is a Tie! Both Chose" + humanChoice);
    }else if ( 
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            console.log ("You Win! " + humanChoice + " Beats " + computerChoice);
            return humanScore++;
        }else {
            console.log("You Lose! " + humanChoice + " Loses Against " + computerChoice);
            return computerScore++;
        }
}

function playGame(){
    while(humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore >= 5){
        console.log("You Win!");
    }else {
        console.log("You Lose!")
    }
}

playGame();

