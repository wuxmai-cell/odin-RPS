var humanScore = 0;
var computerScore = 0;
var humanSelection;

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

const options = document.querySelector(".options");


const humanImg = document.querySelector(".humanScore");
const computerImg = document.querySelector(".computerScore");
const desc = document.querySelector("h3");
const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");

function playRound(humanChoice, ComputerChoice){

    if(humanChoice == "scissors" && ComputerChoice == "paper" ){
        desc.textContent = "You Win! scissors beats paper!";
        humanImg.src = "images/scissors.png"
        computerImg.src = "images/paper.png"
        humanScore ++;
    }else if(humanChoice == "rock" && ComputerChoice == "scissors"){
        desc.textContent = "You Win! Rock beats Scissors!";
        humanImg.src = "images/rock.jpg"
        computerImg.src = "images/scissors.png"
        humanScore++;
    }else if(humanChoice == "paper" && ComputerChoice == "rock"){
        desc.textContent = "You Win! Paper beats Rock!";
        humanImg.src = "images/paper.png"
        computerImg.src = "images/rock.jpg"
        humanScore++;
    }else if(ComputerChoice == "scissors" && humanChoice == "paper"){
        desc.textContent = "You Lose! scissors beats paper!";
        humanImg.src = "images/paper.png"
        computerImg.src = "images/scissors.png"
        computerScore ++;
    }else if(ComputerChoice == "rock" && humanChoice == "scissors"){
        desc.textContent  = "You Lose! Rock beats Scissors!";
        humanImg.src = "images/scissors.png"
        computerImg.src = "images/rock.jpg"
        computerScore ++;
    }else if(ComputerChoice == "paper" && humanChoice == "rock"){
        desc.textContent = "You Lose! Paper beats Rock!";
        humanImg.src = "images/rock.jpg"
        computerImg.src = "images/paper.png"
        computerScore++;
    }else{
        desc.textContent = "Tie! We both picked the same one!";
    }

    hScore.textContent = "Your Score: "+humanScore;
    cScore.textContent = "Computer Score: "+computerScore;
    
}

options.addEventListener("click", function(e){
    let target = e.target;

    switch(target.id){
        case 'rock':
            humanSelection = 'rock';
            break;
        case 'paper':
            humanSelection = 'paper';
            break;
        case 'scissors':
            humanSelection = 'scissors';
            break;
    }

    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if(humanScore == 5 || computerScore == 5){
        if(humanScore>computerScore){
            desc.textContent += "\n YOU WIN!"
        }else if(humanScore<computerScore){
            desc.textContent += "\n YOU LOSE!"
        }
    }

});

