let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");

// for event listening because all the program execute after the button is pressed

const inputValue = document.querySelector(".guessField");

// for array to store the previous guesses by the user

const guessArray = document.querySelector(".gueses");
const remaining = document.querySelector(".remaining");
const startOver = document.querySelector(".resultPara");
const lowOrhigh = document.querySelector(".loworhi");

// console.log(inputValue) // this gives us full html tag
// create an element of paragraph to insert in the .resultPara div at the end of game to display information about the game

const p = document.createElement("p");

// console.log(randomNumber)
// initialize your global variables which you gonna use in your entire program

let prevArr = [];
let numGuess = 1;
let playGame = true;

// Main Game

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(inputValue.value);
    validateGuess(guess);
  });
}

// Methods which are responsible for the execution of complete program

function validateGuess(guess) {
  //
  if (guess === "") {
    alert("Please Enter Some Value for further Proceeding");
  } else if (guess > 100 || guess < 1) {
    alert("Please Enter In Range Number");
  } else if (isNaN(guess)) {
    alert("Please Enter a valid Number");
  } else {
    prevArr.push(guess);
    if (numGuess == 11) {
      Updations(guess); // you are gonna do the updations
      displayMsg(`Game Over . Random Number was ${randomNumber}`);
      // we dont do the check of guess because the game is over
      endGame();
    } else {
      Updations(guess);
      checkGuess(guess);
    }
  }
}

// function which check whether the given input is correct answer or not

function checkGuess(guess) {
  //
  if (guess == randomNumber) {
    displayMsg("You Guessed it Right !!!... ");
    endGame();
  } else if (guess > randomNumber) {
    displayMsg("Number is too High");
  } else if (guess < randomNumber) {
    displayMsg("Number is too low");
  }
}

function Updations(guess) {
  //
  inputValue.value = "";
  guessArray.innerHTML += `${guess} `;
  remaining.innerHTML = `${11 - numGuess}`;
  numGuess++;
}

function displayMsg(message) {
  //
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  inputValue.value = "";
  inputValue.setAttribute("disabled", "");
  p.classList.add("button"); // this just add the button class in p tag
  p.innerHTML = "<h2 id = 'new-game'>Start a New Game</h2>";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newgame = document.querySelector("#new-game");
  newgame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    inputValue.value = "";
    prevArr = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    inputValue.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
