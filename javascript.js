
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        return "rock"
    }
    else if(computerChoice == 1){
        return "scissor"
    }
    else{
        return "paper"
    }
}

function getHumanChoice(){
    let userInput = prompt("Whats your play?");
    return userInput.toLowerCase();
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
        if(humanChoice == "rock"){
            if (computerChoice == "scissor"){
                console.log("You win! Rock beats scissor.");
                humanScore = humanScore + 1;
            }
            else if(computerChoice == "paper"){
                console.log("You lose! Paper beats rock");
                computerScore = computerScore + 1;
            }
            else{
                console.log("Its a draw")
            }
        }
        else if(humanChoice == "scissor"){
            if (computerChoice == "rock"){
                console.log("You lose! Rock beats scissor.");
                computerScore = computerScore + 1;
            }
            else if(computerChoice == "paper"){
                console.log("You win! Scissor beats paper");
                humanScore = humanScore + 1;
            }
            else{
                console.log("Its a draw")
            }
        }
        else if(humanChoice == "paper"){
            if (computerChoice == "rock"){
                console.log("You win! Paper beats rock.");
                humanScore = humanScore + 1;
            }
            else if(computerChoice == "scissor"){
                console.log("You lose! Scissor beats paper");
                computerScore = computerScore + 1;
            }
            else{
                console.log("Its a draw")
            }
        }
    }


    for(let i = 0;i < 5; i++){
        playRound();
    }

    if(humanScore > computerScore)
        console.log('You won against a computer!')
    else if(humanScore < computerScore)
        console.log('You lost to a computer!')
    else
        console.log("It's a draw!");
}

console.log(playGame())