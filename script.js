// Variables
var userGuess = document.querySelector('.user-guess');
// var guessInput = parseInt(userGuess.value);
var minGuess = document.querySelector('.min-guess'); 
var maxGuess = document.querySelector('.max-guess');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button'); 
var resetButton = document.querySelector('.reset-button'); 
var rangeButton = document.querySelector('.submit-range')
var displayGuess = document.querySelector('.display-guess');
var gameIntro = document.querySelector('.game-intro');
var gameFeedBack = document.querySelector('.game-feedback');
var winUpdate = expandMinMax()

var guessCount = 1; 
var minValue = 1; 
var maxValue = 100; 
var randomNumber = getRandomNumber(1,100); 
console.log(randomNumber); 

// Event Listeners 
userGuess.addEventListener('keydown', enableButtons)
guessButton.addEventListener('click', playGame);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetGame);
rangeButton.addEventListener('click', checkRange); 


// Functions 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;  
}

function clearInput(event) {
  event.preventDefault();
  userGuess.value = ''; 
}

function playGame(event) {
  event.preventDefault(); 
  getRandomNumber();
  displayGuess.innerText = userGuess.value;
  guessButton.disabled = true; 
  clearButton.disabled = true; 
  checkGuess(parseInt(userGuess.value));
  clearInput(event);
}

function checkGuess(guess) {
    console.log(guess)
    if (guess < randomNumber) {
    gameIntro.innerText = 'Your number is'; 
    gameFeedBack.innerText = 'Too Low'; 
  } else if (guess > randomNumber) {
    gameIntro.innerText = 'Your number is'; 
    gameFeedBack.innertext = 'Too High'; 
  } else if (guess === randomNumber) {
    expandMinMax();
    gameIntro.innerText = 'Boom!'; 
    gameFeedBack.innerText = `You Are A Genius...New Min: ${minValue} and New Max: ${maxValue}`; 
    console.log(minValue, maxValue); 
  }
}

function resetGame(event) {
  event.preventDefault(); 
  location.reload(); 
  resetButton.disabled = true; 
}

function enableButtons(event) {
  guessButton.disabled = false; 
  clearButton.disabled = false; 
  resetButton.disabled = false; 
}

function checkRange() {
  event.preventDefault(); 
  minValue = parseInt(minGuess.value); 
  maxValue = parseInt(maxGuess.value); 
  randomNumber = getRandomNumber(minValue, maxValue); 
  console.log(randomNumber); 
}

function expandMinMax() {
  minValue -=10; 
  maxValue +=10; 
}


