// Variables
var userGuess = document.querySelector('.user-guess');
var guessInput = parseInt(userGuess.value);
var minGuess = document.querySelector('.min-guess'); 
var maxGuess = document.querySelector('.max-guess');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button'); 
var resetButton = document.querySelector('.reset-button'); 
var displayGuess = document.querySelector('.display-guess');
var gameIntro = document.querySelector('.game-intro');
var gameFeedBack = document.querySelector('.game-feedback');
var minValue = 1; 
var maxValue = 100; 
var randomNumber = Math.floor(Math.random() * 100) + 1; 
var guessCount = 1; 

// Event Listeners 
userGuess.addEventListener('keydown', enableButtons)
guessButton.addEventListener('click', playGame);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetGame);

// Functions 
function getRandomNumber() {
  console.log(randomNumber);
  return (randomNumber); 
}

function clearInput(event) {
  event.preventDefault();
  userGuess.value = ''; 
}

function playGame(event) {
  event.preventDefault(); 
  getRandomNumber();
  displayGuess.innerText = userGuess.value;
  // var guessInput = parseInt(userGuess.value)
  guessButton.disabled = true; 
  clearButton.disabled = true; 
  clearInput(event);
  checkGuess(guessInput);
}

function checkGuess(guessInput) {
  if (guessInput < 1 || guessInput > 100) {
    gameIntro.innerText = 'Your number is'; 
    gameFeedBack.innerText = 'Out of range'; 
  } else if (userGuess < randomNumber) {
    gameIntro.innerText = 'Your number is'; 
    gameFeedBack.innerText = 'Too Low'; 
  } else if (userGuess > randomNumber) {
    gameIntro.innerText = 'Your number is'; 
    gameFeedBack.innertext = 'Too High'; 
  } else if (userGuess === randomNumber) {
    gameIntro.innerText = 'Boom!'; 
    gameFeedBack.innerText = 'You Are A Genius'; 
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


