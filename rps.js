let rpsArray = [0, 1, 2];
function computerPlay (){
    let rng = Math.floor(Math.random() * rpsArray.length);
    if (rng === 0){
        return 'rock'
    }
    else if (rng === 1){
        return 'paper'
    }
    else if (rng === 2){
        return 'scissors'
    }
}
function playerPlay(){
    let choice = prompt('Welcome to a new round of Rock Paper Scissors! To play, type Rock, Paper or Scissors', '')
    if (choice === '') { 
        alert('Please type a choice to play a round');
        playerPlay();
    }
    else if (choice.toLowerCase() === 'paper') {
        return 'paper'
    }
    else if (choice.toLowerCase() === 'scissors') {
        return 'scissors'
    }
    else if (choice.toLowerCase() === 'rock') { 
        return 'rock'
    }
    else {
        alert('Please type your choice correctly');
        playerPlay();
    }}
function play(){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    if (computerSelection === "rock" && playerSelection === "paper"){
        alert('You win! Paper beats rock!'); playerScore++
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        alert('You lose! Rock beats Scissors!'); computerScore++
    }
    else if (computerSelection === "paper" && playerSelection === 'rock'){
        alert('You lose! Paper beats Rock!');  computerScore++
    }
    else if (computerSelection === "paper" && playerSelection === 'scissors'){
        alert('You win! Scissors beats Paper!'); playerScore++
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        alert('You win! Rock beats Scissors!'); playerScore++
    }
    else if (computerSelection === 'scissors' && playerSelection == "paper"){
        alert('You lose! Scissors beat Paper!'); computerScore++
    }
    else if (computerSelection===playerSelection) {
        alert('Draw! Both you and the computer chose the same choice!')    
    }}



let computerScore = 0;
let playerScore = 0;

function scoreAlert(){
    alert(`Your score is ${playerScore} and computer score is ${computerScore}`);
}

function game(){
    play(); scoreAlert();
    }

function letsGo (){
    if (computerScore < 5 && playerScore < 5) {
    game();
    letsGo();
    }
    else if (playerScore == 5) {
        alert('Game over! You win!')
    }
    else if (computerScore==5){
        alert('Game over! You lose!')
    }}
 

letsGo();