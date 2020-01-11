// array of words - word bank
// random number to draw a word

// current word draws blanks for each letter in word

// function: letter-writer -- if keypress corresponds to a letter in the word, write letter in place of the blank
// counter for guesses: start at 0, count to 6 and button to play again

var bands = [
  "queen",
  "aerosmith",
  "nirvanan",
  "metallica",
  "rush",
  "eagles",
  "journey",
  "abba",
  "radiohead",
  "cream"
];
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var word = [];
var wordTarget = [];
var counter = 6;

var button = document.querySelector(".btn"); // selects button
var container = document.querySelector(".word-container"); // selects div with class word container in the DOM object

button.addEventListener("click", wordGenerator, false);

function wordGenerator() {
  word = [];
  let randomNumber = Math.floor(Math.random() * bands.length);
  wordTarget = bands[randomNumber];
  for (var i = 0; i < wordTarget.length; i++) {
    word[i] = "_";
  }

  container.textContent = word;
  console.log(word);
  console.log(wordTarget);
  return word;
}

document.addEventListener(
  "keydown",
  function(e) {
    for (var i = 0; i < word.length; i++) {
      if (e.key === wordTarget[i]) {
        word[i] = wordTarget[i];
        container.textContent = word;
      } else {
        counter--;
      }
    }

    console.log(word);
  },
  false
);

// function letterFinder(e) {
//   for (var i = 0; i < word.length; i++) {
//     if (e.key === wordTarget[i]) {
//       word[i] = wordTarget[i];
//     }
//   }
//   console.log(word);
// }
