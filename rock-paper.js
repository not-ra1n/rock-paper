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

let computerSelection = getComputerChoice();
const score = {};
score.playerWins = 0;
score.computerWins = 0;

// function game() {

   // while(score["playerWins"] < 3 && score["computerWins"] < 3) {
   //     let playerSelectionLower = prompt("Play against the computer in rock, paper, scissors! / Input: Rock, Paper, or Scissors.");
   //     playerSelectionLower = playerSelectionLower.toLowerCase();
   //     if (playerSelectionLower === null) {
    //        return;
    //    } else {
   //        console.log(playRound(playerSelectionLower, computerSelection));
  //      }
 //   }

 //   if (score["playerWins"] === 3) {
 //       return "You won the best of 5 against the computer!";
//    } else {
 //       return "You lost the best of 5 against the computer! Try again!";
 //   } 
// } 


const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    round = (playRound("rock", computerSelection));
    const chicken = document.querySelector('#result');
    chicken.textContent = round;
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    round = (playRound("paper", computerSelection));
    const chicken = document.querySelector('#result');
    chicken.textContent = round;
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    round = (playRound("scissors", computerSelection));
    const chicken = document.querySelector('#result');
    chicken.textContent = round;
});




// console.log(game());