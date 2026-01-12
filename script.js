var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    const num =Math.random();
    if(num<=0.33){
        return "rock";
    }else if(num>0.33 && num<=0.66){
        return "scissors";
    }else{
        return "paper";
    }

}

function getHumanChoice(){
    var choice = prompt("What is your move?(Rock, Paper, or Scissors)").toLowerCase();
    console.log(choice);
    return choice;
}

function playRound(humanChoice, ComputerChoice){
    if(humanChoice == "scissors" && ComputerChoice == "paper" ){
        console.log("You Win! scissors beats paper!");
        humanScore ++;
    }else if(humanChoice == "rock" && ComputerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors!");
        humanScore++;
    }else if(humanChoice == "paper" && ComputerChoice == "rock"){
        console.log("You Win! Paper beats Rock!");
        humanScore++;
    }else if(ComputerChoice == "scissors" && humanChoice == "paper"){
        console.log("You Lose! scissors beats paper!");
        computerScore ++;
    }else if(ComputerChoice == "rock" && humanChoice == "scissors"){
        console.log("You Lose! Rock beats Scissors!");
        computerScore ++;
    }else if(ComputerChoice == "paper" && humanChoice == "rock"){
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    }else{
        console.log("Tie! We both picked the same one!");
    }

    console.log("Your Score: "+humanScore);
    console.log("My Score: "+computerScore);
}

function playGame(){
    for(var i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    
    if(humanScore>computerScore){
        console.log("You WIN!");
    }else if(humanScore<computerScore){
        console.log("You LOSE!");
    }
}

playGame();