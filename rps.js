/* start of project, a variable will be assigned 3 strings and recalled the value randomly */
const computerPlay = ['Rock', 'Paper', 'Scissors']

// a function will be used to randomly generate one string from the array //

function calculate() {
  let x =  Math.floor(Math.random() * computerPlay.length)
  return x
}
console.log(calculate())