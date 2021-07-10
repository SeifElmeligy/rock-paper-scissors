/* start of project, a variable will be assigned 3 strings and recalled the value randomly */

const computerPlay = ['Rock', 'Paper', 'Scissors'] // scoring variables testing //
let playerScore = 0;
let computerScore = 0;

function calculate() {
  let randomOutcome =  Math.floor(Math.random() * computerPlay.length)
  return randomOutcome
}
 
   let computerChoice = computerPlay[calculate()].toLowerCase()
   let playerChoice = prompt('Welcome to RPS! to play, type Rock, Paper or Scissors', 'Rock or Paper or Scissors').toLowerCase();
   
   function computerSelect(){
       return computerChoice;
   }
   function playerSelect(){
       return playerChoice;
   }

// adding user interaction and comparing it with the computer choice //



function play() {

    computerSelect();
    playerSelect();
    if (playerChoice == "rock" && computerChoice == "paper"){
        alert('You lose! Paper beats rock!'); return ++ computerScore 
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        alert('You win! Rock beats Scissors!'); return ++ playerScore 
    }
    else if (playerChoice == "paper" && computerChoice == 'rock'){
        alert('You Win! Paper beats Rock!'); return ++ playerScore 
    }
    else if (playerChoice == "paper" && computerChoice == 'scissors'){
        alert('You lose! Scissors beats Paper!'); return ++ computerScore 
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        alert('You lose! Rock beats Scissors!'); return ++ computerScore 
    }
    else if (playerChoice == 'scissors' && computerChoice == "paper"){
        alert('You win! Scissors beat Paper!'); return ++ playerScore 
    }
    else {
        alert('Draw! Both you and the computer chose the same choice!');
    }
    return scoreAlert;
}

//console.log(play(), playerScore, computerScore) 

let scoreAlert = alert(`Your score is ${playerScore} and the computer score is ${computerScore}`);

function game(playerChoice, computerChoice){
    play(); 
}

console.log(play())
    
