/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount a guesses
- Notify player of guesses remaining
- Notify the player of the  correct answer if loose
- let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(),
    guessesLeft = 3;

// Ui Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      reset = document.querySelector('#reset-btn');
reset.style.display = 'none';

      
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess

reset.addEventListener('click',function(){
  window.location.reload();
})

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  // validate 
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }else{
    // Check if won
    if (guess === winningNum) {
      // Disable input
      gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
      //--Wrong Input
      guessesLeft -= 1;

      if (guessesLeft === 0) {//--lost 
        gameOver(false, `GAME OVER, ${guess} is not correct. The correct no was ${winningNum} `);

      } else {//--still in game
        // Border Color change and clear input
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left! `, 'red');
      }
    }
  }
})

// game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  //Disable Button
  guessBtn.style.display = 'none';
  // Display Play Again
  reset.style.display = '';
  // Set message
  setMessage(msg, color);
}

function getRandomNum() {
  // console.log(Math.random());
  // console.log(Math.random() * (max - min + 1) + min);
  return Math.floor(Math.random()*(max-min+1)+min);  
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
  
}
