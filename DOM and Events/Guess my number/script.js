'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener("click", function () {
  let guess = Number(document.querySelector('.guess').value);

  //when no input is given
  if (!guess) {
    document.querySelector('.message').textContent = "No Number!";
  }

  //if guesssed the secret number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "Correct Guess!";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //if guessed the wrong number
  else {
    if (score > 1) {
      score--; 
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : "Too Low";
    }
    else {
      document.querySelector('.message').textContent = 'Loser Loser!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = "30rem";
    }
  }

});

//resetting all the values
document.querySelector(".again").addEventListener('click', function () {
  //resetting values
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.guess').value = '';

  //resetting style
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.number').textContent = "?";
  
});
