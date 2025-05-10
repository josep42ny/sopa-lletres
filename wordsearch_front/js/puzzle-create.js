import { modify, select } from "./functions.js";

const validChars = "abcdefghijklmnopqrstuvwxyzç"
const letters = [...document.querySelectorAll('.letter')];
const wordList = document.querySelector('#wordList');
const board = document.querySelector('.add-game-board');
let selecting = false;
let inserted = false;
let fisrtMark;
const word = {
    word: '',
    coords: [],
};
let newWord;
const words = [];
let yOffsetLast;
let xOffsetLast;

document.querySelector('#submit').addEventListener('click', handleSend);
document.querySelector('#fillPuzzle').addEventListener('click', fillPuzzle);
document.querySelector('#resetPuzzle').addEventListener('click', resetPuzzle);
document.addEventListener('mouseup', handleMouseup);

function handleMouseup() {
    selecting = false;
    console.log(inserted)
    if (inserted) {
        words.push(newWord);
        drawWordList();
        inserted = false;
    }
    board.removeEventListener('mousedown', handleMousedown);
    board.removeEventListener('mouseover', handleMouseover);
}

document.querySelector('#wordAdd').addEventListener('click', _ => {
    if (typeof board.onmousedown !== 'function' || typeof board.onmouseover !== 'function') {
        board.addEventListener('mousedown', handleMousedown);
        board.addEventListener('mouseover', handleMouseover);
        newWord = Object.create(word);
        newWord.word = document.querySelector('#wordInput').value;
    }
});

wordList.addEventListener('click', handleWordDeletion);
function handleWordDeletion(event) {
    if (event.target.type === 'button') {
        deleteWord(event.target.value);
    }
}

function handleMousedown(element) {
    element.preventDefault();
    if (!element.target.classList.contains('letter')) { return; };
    selecting = true;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === element.target) {
            fisrtMark = i;
        }
    }
};

function handleMouseover(element) {
    element.preventDefault();
    if (!selecting) { return; }
    if (!element.target.classList.contains('letter')) { return; }
    let hoveringLetter;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === element.target) {
            hoveringLetter = i;
        }
    }

    let yDifference = (Math.floor(hoveringLetter / 10)) - (Math.floor(fisrtMark / 10));
    let xDifference = (Math.floor(hoveringLetter % 10)) - (Math.floor(fisrtMark % 10));
    let yOffset = Math.min(Math.max(yDifference, -1), 1);
    let xOffset = Math.min(Math.max(xDifference, -1), 1);

    if (Math.abs(yDifference) === Math.abs(xDifference) && (Math.abs(yDifference) >= newWord.word.length - 1)
        || (Math.abs(yDifference) >= newWord.word.length - 1 && Math.abs(xDifference) === 0)
        || (Math.abs(xDifference) >= newWord.word.length - 1 && Math.abs(yDifference) === 0)) {
        clearWord(yOffsetLast, xOffsetLast);
        fillWord(yOffset, xOffset);
        drawWords();
        drawWord(newWord);

        yOffsetLast = yOffset;
        xOffsetLast = xOffset;
    }
};

function drawWordList() {
    let html = '';
    for (const [index, word] of words.entries()) {
        html += `<div><button type="button" class="delete" value="${index}">X</button> ${word.word}</div>`;
    }
    wordList.innerHTML = html;
}

function deleteWord(index) {
    const deleted = words.splice(index, 1)[0];
    for (let index of deleted.coords) {
        letters[index].value = '';
        letters[index].classList.remove('cell-highlighted');
        letters[index].disabled = false;
    }
    drawWords();
    drawWordList();
}

function fillWord(yOffset, xOffset) {
    if (yOffset === undefined || xOffset === undefined) {
        return;
    }
    newWord.coords = [];
    let offset = xOffset + yOffset * 10;
    let end = fisrtMark;
    for (let i = 0; i < newWord.word.length; i++) {
        newWord.coords.push(end);
        end += offset;
    }
    inserted = true;
}

function drawWords() {
    for (let word of words) {
        drawWord(word);
    }
}

function drawWord(word) {
    const le = word.word.split('');
    let letter = 0;
    for (let coord of word.coords) {
        letters[coord].value = le[letter++];
        letters[coord].classList.add('cell-highlighted');
        letters[coord].disabled = true;
    }
}

function clearWord(yOffset, xOffset) {
    if (yOffset === undefined || xOffset === undefined) {
        return;
    }

    let change = xOffset + yOffset * 10;
    let cur = fisrtMark;
    for (let i = 0; i < newWord.word.length; i++) {
        letters[cur].classList.remove('cell-highlighted');
        letters[cur].value = '';
        letters[cur].disabled = false;
        cur += change;
    }
}


select('select id, difficulty from Difficulty')
    .then(rows => {
        let html = '';
        for (const row of rows) {
            html += `<label><input required type="radio" name="difficulty" value="${row['id']}"> ${row['difficulty']}</label>`;
        }
        document.querySelector('#difficulty').innerHTML = html;
    });

function resetPuzzle() {
    for (const cell of letters) {
        cell.value = '';
        cell.classList = 'letter';
    }
    drawWords();
    inserted = false;
}

function fillPuzzle() {
    for (const cell of letters) {
        if (cell.value.trim() === '') {
            cell.value = validChars[Math.floor(Math.random() * validChars.length)];
        }
    }
}

function handleSend() {
    let query = 'insert into temp (word, start_pos, end_pos, letter, pos) values ';
    if (words.length < 10) {
        return;
    }
    console.log(words);
    for (let i = 0; i < letters.length; i++) {
        if (i < words.length) {
            query += `('${words[i].word}', ${words[i].coords[0]}, ${words[i].coords[words[i].coords.length - 1]},`;
        } else {
            query += `(null, null, null,`;
        }
        query += ` '${letters[i].value}', ${i}),`;
    }
    query = query.replace(/.$/, ';')
    const proc = `call createPuzzle(${document.querySelector('input[name="difficulty"]:checked').value}, ${localStorage.getItem('aid')}, '${document.querySelector('#puzzleName').value}');`;

    console.log(query);
    modify(query).then(modify(proc));
}