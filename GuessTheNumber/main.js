"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let qm = '?';
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector(".number").textContent = secretNumber;



document.querySelector('.number').textContent = qm;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    // When is no input
    if (!guess) {
         displayMessage('⛔ No Number');

    }

    // When player is Wins
    else if (guess === secretNumber) {
        displayMessage( '🎉 Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.number').textContent = secretNumber;
    }

    // When player is Wrong
    else if (guess !== secretNumber) {
         if (score > 1) {
             displayMessage( guess> secretNumber ? '📈 Too high' : '📉 Too Low');
             score--;
             document.querySelector('.score').textContent = score;
         }
         else {
             displayMessage("You lose the game!")
             document.querySelector('.score').textContent = 0;
         }
    }
})


document.querySelector(".again").addEventListener('click', function () {

    // save the data
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = qm;
    document.querySelector('.guess').value = ' ';

    // Style
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';


});