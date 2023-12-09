function getComputerChoice() {
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return thing
}

function playRound(playerSelection, computerSelection) {

    let playerSelection-lower = playerSelection.toLowerCase();

    const TIE = ((playerSelection.lower == 'rock' && computerSelection == rock) 
    || (playerSelection == scissors && computerSelection == scissors)
    || (playerSelection == paper && computerSelection == paper))

    if (TIE) {
        return playRound;
    } else if (playerSelection-lower == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock.";
    } else if (playerSelection-lower == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors.";
    } else if (playerSelection-lower == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection-lower == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper.";
    } else if (playerSelection-lower == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper.";
    } else {
        return "You win! Paper beats rock.";
    }
} 


const computerSelection = getComputerChoice();
const playerSelection = 'Rock';
console.log(playRound(playerSelection, computerSelection));