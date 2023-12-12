function getComputerChoice() {
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return thing
}

function playRound(playerSelectionLower, computerSelection) {

    const TIE = ((playerSelectionLower == 'rock' && computerSelection == 'rock') 
    || (playerSelectionLower == 'scissors' && computerSelection == 'scissors')
    || (playerSelectionLower == 'paper' && computerSelection == 'paper'))

    if (TIE) {
        return playRound;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock."; computerWins++;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors."; userWins++;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors."; computerWins++;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper."; userWins++;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper."; computerWins++;
    } else {
        return "You win! Paper beats rock.";
    }
} 


const computerSelection = getComputerChoice();

function game() {

    for (i = 0; i < 5; i++) {
        let playerSelectionLower = prompt("Rock, paper, or scissors?");

        playerSelectionLower = playerSelectionLower.toLowerCase();
    
        let computerWins = 0;
        let userWins = 0;
    
        
        if (userWins == 3) {
            return "You won the best of 5!"
           } else if (computerWins == 3) {
            return "You lost! The computer won the best of 5"
           } else {
            console.log(playRound(playerSelectionLower, computerSelection))
           }
    }
   
    
}
   

console.log(game())