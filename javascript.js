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


console.log(getComputerChoice(3))