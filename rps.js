/* start of project, a variable will be assigned 3 strings and recalled the value randomly */

const computerPlay = ['Rock', 'Paper', 'Scissors']

// a function will be used to randomly generate one number from the array //

function calculate() {
  let randomOutcome =  Math.floor(Math.random() * computerPlay.length)
  return randomOutcome
}

/* the previous function outputs a number from the array length, 
we need to extract the string value from the array using the previous function */

let computerChoice = computerPlay[calculate()].toLowerCase()

// we need to add user interaction and compare it with the computer choice //

let playerChoice = prompt('Welcome to RPS! to play, type Rock, Paper or Scissors').toLowerCase()

function play() {
    if (playerChoice == "rock" && computerChoice == "paper"){
        alert('You lose! Paper beats rock!')
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        alert('You win! Rock beats Scissors!')
    }
    else if (playerChoice == "paper" && computerChoice == 'rock'){
        alert('You lose! Scissors beats Paper!')
    }
    else if (playerChoice == "paper" && computerChoice == 'scissors'){
        alert('You lose! Rock beats Paper!')
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        alert('You lose! Rock beats Scissors!')
    }
    else if (playerChoice == 'scissors' && computerChoice == "paper"){
        alert('You win! Scissors beat Paper!')
    }
    else {
        alert('Draw! The computer chose the same choice!')}
}

// the base game is now complete, but still needs looping and score keeping // 

function game() {
    play()
}

