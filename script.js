isAlive = true;
let submitBtn = document.getElementById("submit");
let entryGuess = document.getElementById("guess");
let guesses = document.getElementById("guesses");
let answer = document.getElementById("answer");
let restart = document.getElementById("restart");
guessCount = 0;

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

function submit() {
  if (isAlive) {
    checkGuess();
  } else {
    alert("Game Over!!");
  }
  entryGuess.value = "";
}

function checkGuess() {
  let guess = Number(entryGuess.value);
  if (guess === "") {
    alert("Enter A Guess");
  }
  guesses.textContent += " " + guess + ", ";
  if (guess < random) {
    let result = `<span>Aww, bollocks, that was too low</span>`;
    answer.innerHTML = result;
  } else if (guess === random) {
    let result = `<span>Cheers mate, that's correct</span><button onclick="window.location.reload()" id="restart">Restart</button>`;
    answer.innerHTML = result;
    isAlive = false;
  } else {
    let result = `<span>Aww, bollocks, that was too high</span>`;
    answer.innerHTML = result;
  }
}

submitBtn.addEventListener("click", submit);
