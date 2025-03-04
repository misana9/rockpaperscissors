document.addEventListener("DOMContentLoaded", () => {

    const scissorBtn = document.querySelector(".scissor");
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    
    const userPts = document.querySelector("#user-score")
    const userScore = document.createElement("h2");
    const compPts = document.querySelector("#comp-score");
    const AIScore = document.createElement("h2");   
    
    const userImage = document.querySelector(".user-choice");
    const compImage = document.querySelector(".comp-choice");
    
    const outputh1 = document.querySelector(".output h1")
    
    
    let humanScore = 0, compScore = 0;
    
    userImage.style.backgroundImage = 'url("images/question.png")';
    compImage.style.backgroundImage = 'url("images/question.png")';
    
    
    
    function getComputerChoice() {
        const compChoice = Math.floor(Math.random() * 3);
        if (compChoice == 0) {
            userImage.classList.add
            return "rock";
        } else if (compChoice == 1) {
            return "scissors";
        } else {
            return "paper";
        }
    }
    updateScore();
    
    function playRound(comp,user){
        if(user == comp){
            outputh1.textContent = "It's a tie!";
        }
        else if(user == "scissors"){//scissor
            if(comp == "paper"){
                outputh1.textContent = "You win";
                humanScore++;
            }
            else{//rock
                outputh1.textContent = "You lose!";
                compScore++;
            }
        }
        else if(user == "rock"){//rock
            if(comp == "scissors"){
                outputh1.textContent = "You win"
                humanScore++;
            }
            else{//paper
                outputh1.textContent = "You lose";
                compScore++;
            }
        }
        else{//paper
            if(comp == "scissors"){
                outputh1.textContent = "You lose";
                compScore++;
            }
            else{//rock
                outputh1.textContent = "You win";document.
                humanScore++;
            }
        }
    }
    
    function showWinnerPopup(winner) {
        setTimeout(() => {
            document.querySelector(".popUp div").textContent = winner + " wins!";
            document.querySelector(".popUp").style.display = "block";
            document.querySelector(".overlay").style.display = "block";
    
        }, 100);
    }
    
    
    function updateScore(){
        userScore.textContent = humanScore;
        AIScore.textContent = compScore;
        userScore.classList.add("score");
        AIScore.classList.add("score")
        userPts.append(userScore)
        compPts.append(AIScore)
        if (humanScore === 5 || compScore === 5) {
            showWinnerPopup(humanScore === 5 ? "User" : "Computer");
        }
    
    }
    
    function handleChoice(choice) {
        const userChoice = choice;
        userImage.style.backgroundImage = `url("images/${userChoice}.png")`;
        const compChoice = getComputerChoice();
        compImage.style.backgroundImage = `url("images/${compChoice}.png")`;
        playRound(compChoice, userChoice);
        updateScore();
    }
    
    function restartGame() {
        // Hide popup and overlay
        document.querySelector(".popUp").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    
        // Reset game variables (example, adjust based on your implementation)
        humanScore = 0;
        compScore = 0;
        updateScore();
    
        
    userImage.style.backgroundImage = 'url("images/question.png")';
    compImage.style.backgroundImage = 'url("images/question.png")';
    }
    
    
    
    scissorBtn.addEventListener("click", () => {
        handleChoice("scissors");
    });
    rockBtn.addEventListener("click", () => handleChoice("rock"));
    paperBtn.addEventListener("click", () => handleChoice("paper"));
    
    document.querySelector(".restartButton").addEventListener("click", restartGame);
    
    
    
    });
    
    
    
    