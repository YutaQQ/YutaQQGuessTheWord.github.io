const words = ['hangman', 'javascript', 'programming', 'computer', 'internet', 'html', 'css', 'python',];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(chosenWord.length).fill('_');
let attemptsLeft = 6;

function displayWord() {
  document.getElementById('word').innerText = guessedWord.join(' ');
}

function displayAttempts() {
  document.getElementById('attempts').innerText = attemptsLeft;
}

function displayLetters() {
  const lettersContainer = document.getElementById('letters');
  lettersContainer.innerHTML = '';

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement('button');
    button.innerText = letter;
    button.addEventListener('click', () => guessLetter(letter));
    lettersContainer.appendChild(button);
  }
}

function guessLetter(letter) {
  if (attemptsLeft > 0 && guessedWord.includes('_')) {
    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter.toLowerCase()) {
        guessedWord[i] = letter.toLowerCase();
        found = true;
      }
    }

    if (!found) {
      attemptsLeft--;
    }

    displayWord();
    displayAttempts();

    if (attemptsLeft === 0) {
      alert('You lose! The word was: ' + chosenWord);
    } else if (!guessedWord.includes('_')) {
      alert('Congratulations! You guessed the word: ' + chosenWord);
    }
  }
}

function resetGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array(chosenWord.length).fill('_');
  attemptsLeft = 6;
  displayWord();
  displayAttempts();
  displayLetters();
}

displayWord();
displayAttempts();
displayLetters();
