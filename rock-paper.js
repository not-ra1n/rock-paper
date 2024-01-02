function getComputerChoice() {
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return thing;
}

function playRound(playerSelectionLower, computerSelection) {

    if ((playerSelectionLower == 'rock' && computerSelection == 'rock') 
    || (playerSelectionLower == 'scissors' && computerSelection == 'scissors')
    || (playerSelectionLower == 'paper' && computerSelection == 'paper')) {
        return `It's a tie! Play again!`;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
        score["computerWins"]+=1;
        return `You lose! Computer chose ${computerSelection}, Player chose ${playerSelectionLower}, Computer Score : ${score["computerWins"]}`;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        score["playerWins"]+=1;
        return `You win! Computer chose ${computerSelection}, Player chose ${playerSelectionLower}, Player Score : ${score["playerWins"]}`;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        score["computerWins"]+=1;
        return `You lose! Computer chose ${computerSelection}, Player chose ${playerSelectionLower}, Computer Score : ${score["computerWins"]}`;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        score["playerWins"]+=1;
        return `You win! Computer chose ${computerSelection}, Player chose ${playerSelectionLower}, Player Score : ${score["playerWins"]}`;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        score["computerWins"]+=1;
        return `You lose! Computer chose ${computerSelection}, Player chose ${playerSelectionLower}, Computer Score: ${score["computerWins"]}`;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
        score["playerWins"]+=1; 
        return `You win! Computer chose ${computerSelection}, Player chose ${playerSelectionLower}, Player Score : ${score["playerWins"]}`;
    } else {
        return "Answer must be 'rock' or 'paper' or 'scissors'.";
    }
} 
const score = {};
score.playerWins = 0;
score.computerWins = 0;

    const rock = document.querySelector('#Rock');
    rock.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        round = (playRound("rock", computerSelection));
        const result = document.querySelector('#result');
        result.textContent = round;
        if (score["playerWins"] === 5) {
            result.textContent = "You won against the computer!"; 
            score["playerWins"] = 0;
            score["computerWins"] = 0;
        }
        if(score["computerWins"] === 5) {
            result.textContent = "You lost against the computer! Try again!"; 
            score["playerWins"] = 0;
            score["computerWins"] = 0;
        }
    });
    
    const paper = document.querySelector('#Paper');
    paper.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        round = (playRound("paper", computerSelection));
        const result = document.querySelector('#result');
        result.textContent = round;
        if (score["playerWins"] === 5) {
            result.textContent = "You won against the computer!"; 
            score["playerWins"] = 0;
            score["computerWins"] = 0;
        }
        if(score["computerWins"] === 5) {
            result.textContent = "You lost against the computer! Try again!"; 
            score["playerWins"] = 0;
            score["computerWins"] = 0;
        }
    });
    
    const scissors = document.querySelector('#Scissors');
    scissors.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        round = (playRound("scissors", computerSelection));
        const result = document.querySelector('#result');
        result.textContent = round;
        if (score["playerWins"] === 5) {
            result.textContent = "You won against the computer!"; 
            score["playerWins"] = 0;
            score["computerWins"] = 0;
        }
        if(score["computerWins"] === 5) {
            result.textContent = "You lost against the computer! Try again!"; 
            score["playerWins"] = 0;
            score["computerWins"] = 0;
        }
    });