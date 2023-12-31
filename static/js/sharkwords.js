
//collab with Nadia

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//


const handleCorrectGuess = (letter) => {
  // look in the document for all classes that are letter
  const letterString = `.${letter}`;
  const letterDivs = document.querySelectorAll(`.${letter}`);
  console.log(letterDivs)
  console.log(letterString)
  for (div of letterDivs){
    console.log(div)
    div.innerHTML = letter;
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = ('submit', () => {
  numWrong += 1;
  //change the image
  if (numWrong <= 5){
    
    const sharkPhoto = document.querySelector('img');
    sharkPhoto.getAttribute('src');
    sharkPhoto.setAttribute('src',`/static/images/guess${numWrong}.png`);
  }

  if (numWrong === 5) {
    //hide the buttons
    document.querySelector('#letter-buttons').style.display = 'none'; 
    //unhide the a element
    document.querySelector('#play-again').style.display = ''; 
  }  
  console.log(numWrong);
  //alert for game end
  //  alert('Play again');

});

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  const resetLink = document.querySelector('#play-again');
  resetLink.addEventListener('click', resetGame);

  createDivsForChars(word);
  generateLetterButtons();

  
  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE;
    button.addEventListener('click', () => {
      const letter = button.innerHTML; 

      disableLetterButton(letter);
      console.log(letter);
      if (word.includes(letter)){
        handleCorrectGuess(letter);
      } 
      else {
        handleWrongGuess(letter);
      }
    })
    
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
