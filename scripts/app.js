let game;
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');


const startGame = async () => {
    const puzzle = await getPuzzle();
    let maxPuzzleLength = 10;
    puzzle.length >= maxPuzzleLength ? maxPuzzleLength : maxPuzzleLength = 5;
    game = new Hangman(puzzle, maxPuzzleLength);
    renderToScreen();
}

const renderToScreen = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game.statusMessage;
    const puzzleWord = game.puzzle.split('');

    for(let letter of puzzleWord) {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    }
}


window.addEventListener('keypress', (e) => {
    const guess = e.key;
    game.makeGuess(guess);
    renderToScreen();
});

startGame();

document.querySelector('#reset').addEventListener('click', startGame);



