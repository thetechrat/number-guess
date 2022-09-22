isAlive = true;
let submitBtn = document.getElementById("submit");
let entryGuess = document.getElementById("guess");
let guesses = document.getElementById("guesses");

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

function submit() {
  if (isAlive) {
    checkGuess();
  } else {
    alert("Game Over!!");
  }
}

function checkGuess() {
  let guess = Number(entryGuess.value);
  if (guess === "") {
    alert("Enter A Guess");
  }
  guesses.textContent += " " + guess + ", ";
  if (guess < random) {
    console.log("aww, bollocks, that was too low");
  } else if (guess === random) {
    console.log("Cheers mate, that's correct");
    isAlive = false;
  } else {
    console.log("aww, bollocks, that was too high");
  }
}

submitBtn.addEventListener("click", submit);
