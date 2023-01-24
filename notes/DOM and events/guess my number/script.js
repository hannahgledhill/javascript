'use strict';

const message = document.querySelector('.message');
const scoreElem = document.querySelector('.score');
const numberElem = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const guessElem = document.querySelector('.guess');
const resetElem = document.querySelector('.again');
const highScoreElem = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random()*20) +1; // will generate a random number between 1 and 20 (trunc removes decimal places)
let score = 20;
let highscore = 0;
console.log(secretNumber);

checkButton.addEventListener('click', function(e) {
    const guess = Number(guessElem.value); // anything we get from an input field will usually be a string

    if(!guess) { // above will eval to 0 which is falsy 
        message.textContent = 'No number!';
    }
    else if (guess === secretNumber) {
        message.textContent = 'Correct number!';
        numberElem.textContent = secretNumber;
        numberElem.style.width = '30rem'; // has to be a string, not even just numbers
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            highScoreElem.textContent = highscore;
        }
    }
    else {
        if (score > 0) {
            guess > secretNumber ? message.textContent = 'Too high' : message.textContent = 'Too low';
            score--;
            scoreElem.textContent = score;
        }
        else {
            message.textContent = 'You lost the game :(';
        }
    }
});

resetElem.addEventListener('click', function(e){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    message.textContent = 'Start guessing...';
    scoreElem.textContent = score;
    numberElem.textContent = '?';
    guessElem.value = '';
    numberElem.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});