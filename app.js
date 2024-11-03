const userChoiceDisplay = document.querySelector(".user-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const resultDisplay = document.querySelector(".result");
const possibleChoices = document.querySelectorAll(".choice");

let userChoice;
let computerChoice;
let result = "";

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "Rock smashes scissors! You win!";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    result = "Paper covers rock! You lose!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result = "Paper covers rock! You win!";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "Scissors cuts paper! You lose!";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    result = "Rock smashes scissors! You lose!";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    result = "Scissors cuts paper! You win!";
  }
  resultDisplay.innerHTML = result;
}
