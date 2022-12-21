"use strict";

const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const happy = document.querySelector(".happy");

let x_secretNumber = Math.trunc(Math.random() * 20) + 1;
let x_score = 20;
let x_highscore = 0;

check.addEventListener("click", function () {
  // guess let equal
  let x_guess = Number(guess.value);
  // if (!)
  if (!x_guess) {
    message.textContent = "⛔ No Value";
  } else if (x_guess === x_secretNumber) {
    message.textContent = "🎉 You Win!";
    happy.textContent = "It is your Birthday. HAPPY BIRTHDAY CHRISTY!!!";
    number.textContent = x_secretNumber;

    if (x_score > x_highscore) {
      x_highscore = x_score;
      highscore.textContent = x_highscore;
    }

    document.querySelector("body").style.backgroundColor = "rgb(112, 26, 117)";
    document.querySelector(".box").style.width = "200px";
  } else if (x_guess !== x_secretNumber) {
    if (x_score > 1) {
      message.textContent = x_guess > x_secretNumber ? "Too High" : "Too Low";
      x_score--;
      score.textContent = x_score;
    } else {
      message.textContent = "You Lose!";
      score.textContent = "0";
    }
  }
});

again.addEventListener("click", function () {
  x_secretNumber = Math.trunc(Math.random() * 20) + 1;
  x_score = 20;

  number.textContent = "?";
  guess.value = "";
  score.textContent = x_score;
  message.textContent = "Start guessing...";
  happy.textContent = "Guess My Number!";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".box").style.width = "128px";
});
