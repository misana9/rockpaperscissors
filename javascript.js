let humanScore = 0;
let computerScore = 0;
let round = 0;
let winner;
let playerChoice;
let aiChoice ;

const rock = document.getElementById("rockBtn");
const scissor = document.getElementById("scissorBtn");
const paper = document.getElementById("paperBtn");
const div = document.getElementById("scoreBoard")
const humanScoreText = document.getElementById("humanScore");
const computerScoreText = document.getElementById("computerScore");


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        aiChoice = "rock";
    }
    else if(computerChoice == 1){
        aiChoice = "scissor";
    }
    else{
        aiChoice = "paper";
    }
}

function getHumanChoice(e){
        getComputerChoice();
        if(e.target.id === "rockBtn")
            playRound("rock",aiChoice);
        else if(e.target.id === "scissorBtn")
            playRound("scissor",aiChoice);
        else
            playRound("paper",aiChoice);
    }

function checkWinner(){
    if(humanScore > computerScore)
        winner = "YOU!";
    if(humanScore< computerScore){
        winner = "AI!";
    }
    const winnerText = document.createElement("div");
    winnerText.textContent = "Winner is " + winner;
    const restart = document.createElement("button");
    restart.textContent = "Restart";
    scoreBoard.appendChild(winnerText);
    scoreBoard.appendChild(restart);

    restart.addEventListener("click", () => {
        location.reload();
    })
}



function playRound(playerChoice,computerChoice){
    getComputerChoice();
    if(playerChoice == "rock"){
        if (computerChoice == "scissor"){
            scoreBoard.textContent = "You win! Rock beats scissor.";
            humanScore = humanScore + 1;
            humanScoreText.textContent = humanScore;
        }
        else if(computerChoice == "paper"){
            scoreBoard.textContent = "You lose! Paper beats rock";
            computerScore = computerScore + 1;
            computerScoreText.textContent = computerScore;
        }
        else{
            scoreBoard.textContent = "Its a draw";
        }
    }
    else if(playerChoice == "scissor"){
        if (computerChoice == "rock"){
            scoreBoard.textContent = "You lose! Rock beats scissor.";
            computerScore = computerScore + 1;
            computerScoreText.textContent = computerScore;
        }
        else if(computerChoice == "paper"){
            scoreBoard.textContent = "You win! Scissor beats paper";
            humanScore = humanScore + 1;
            humanScoreText.textContent = humanScore;
        }
        else{
            scoreBoard.textContent = "Its a draw";
        }
    }
    else if(playerChoice == "paper"){
        if (computerChoice == "rock"){
            scoreBoard.textContent = "You win! Paper beats rock.";
            humanScore = humanScore + 1;
            humanScoreText.textContent = humanScore;
        }
        else if(computerChoice == "scissor"){
            scoreBoard.textContent = "You lose! Scissor beats paper";
            computerScore = computerScore + 1;
            computerScoreText.textContent = computerScore;
        }
        else{
            scoreBoard.textContent = "Its a draw";
        }
    }
    if(humanScore == 5 || computerScore == 5)
    checkWinner();
}



rock.addEventListener("click", (e) => {
    if(computerScore != 5 && humanScore !=5){
    getHumanChoice(e);
    }
});

scissor.addEventListener("click", (e) => {
    if(computerScore != 5 && humanScore !=5){
        getHumanChoice(e);
        }
});

paper.addEventListener("click", (e) => {
    if(computerScore != 5 && humanScore !=5){
        getHumanChoice(e);
        }
});
