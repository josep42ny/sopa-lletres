import { select, toTitleCase } from './functions.js';

const puzzles = await select(`
    select Puzzle.name, Puzzle.id
    from Puzzle;
`);

let html = '';
if (puzzles.length === 0) {
    html += `<option value="" disabled selected>No s'han trobat sopes</option>`
} else {
    for (let puzzle of puzzles) {
        html += `<option value="${puzzle.id}">${puzzle.name}</option>`;
    }
}
const dropdown = document.querySelector('#puzzleList select');
dropdown.innerHTML += html;

document.querySelector('#puzzleList').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const board = document.querySelector('#gameBoard');
    const wordList = document.querySelector('#gameWords');
    const name = document.querySelector('#puzzleName');
    const difficulty = document.querySelector('#puzzleDifficulty');

    select(`
        select Puzzle.name, Difficulty.difficulty
        from Puzzle, Difficulty
        where Puzzle.id = ${formData.get('puzzleId')}
        and Puzzle.difficultyId = Difficulty.id;
    `).then(data => {
        name.innerHTML = toTitleCase(data[0].name);
        difficulty.innerHTML = `DIFICULTAT ${data[0].difficulty.toUpperCase()}`;
    });

    select(`
        select Letter.letter
        from Letter
        where Letter.puzzleId = ${formData.get('puzzleId')};
    `).then(data => {
        let lettersHtml = '';
        for (let letter of data) {
            lettersHtml += `<div>${letter.letter.toUpperCase()}</div>`;
        }
        board.innerHTML = lettersHtml;
    });

    select(`
        select Word.word
        from Word, Puzzle_Word
        where Word.id = Puzzle_Word.wordId
        and Puzzle_Word.puzzleId = ${formData.get('puzzleId')};
    `).then(data => {
        let wordsHtml = '';
        for (let word of data) {
            wordsHtml += `<div>${word.word.toUpperCase()}</div>`;
        }
        wordList.innerHTML = wordsHtml;
    });
});