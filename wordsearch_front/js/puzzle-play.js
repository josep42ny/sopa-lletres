import { modify, select } from "./functions.js";

let puzzleId = new URLSearchParams(location.search).get('puzzle');
const boardElem = document.querySelector("#gameBoard");
const wordsElem = document.querySelector("#gameWords");
const words = [];
let selected = [];
let startTarget;
let difficulty;
let timeStart;

select(`
        select letter
        from Letter
        where Letter.puzzleId = ${puzzleId};
        `)
    .then(data => {
        let letterHtml = '';
        let count = 0;
        for (let row of data) {
            letterHtml += `<div value='${count++}'>${row.letter.toUpperCase()}</div>`;
        }

        boardElem.innerHTML = letterHtml;
    });

select(`
        select Word.id, word, start, end
        from Puzzle_Word, Word
        where Puzzle_Word.puzzleId = ${puzzleId}
        and Puzzle_Word.wordId = Word.id;
        `)
    .then(data => {
        let wordHtml = '';
        for (let row of data) {
            words.push(row);
            wordHtml += `<div value="w${row.id}">${row.word.toUpperCase()}</div>`;
        }

        wordsElem.innerHTML = wordHtml;
    });

select(`
        select name, difficulty, weight
        from Puzzle, Difficulty
        where Puzzle.id = ${puzzleId}
        and difficultyId = Difficulty.id;
        `)
    .then(data => {
        document.querySelector('#puzzleName').textContent = data[0].name;
        document.querySelector('#puzzleDifficulty').textContent = 'DIFICULTAT ' + data[0].difficulty.toUpperCase();
        difficulty = data[0].weight;
        timeStart = Date.now();
    });

document.querySelector('#gameBoard').addEventListener('mousedown', handleMousedown);
document.querySelector('#gameBoard').addEventListener('mouseup', handleMouseup);

function handleMousedown(e) {
    startTarget = e.target.getAttribute('value');
    for (let word of words) {
        if (startTarget == word.start || startTarget == word.end) {
            selected.push(word);
        }
    }
}

function handleMouseup(e) {
    let target = e.target.getAttribute('value');
    handleVictory();
    if (target === startTarget) { return; }
    for (let word of selected) {
        if (target == word.start || target == word.end) {
            document.querySelector(`#gameWords div[value='w${word.id}']`).classList.add('text-green');
        }
    }

    //if (won()) {
    handleVictory();
    //}

    selected = [];
}

function won() {
    return words.length <= 0 ? true : false;
}

function handleVictory() {
    let secconds = (Date.now() - timeStart) / 1000;
    console.log(Math.max(0, Math.round((60 - secconds) * difficulty)));

}