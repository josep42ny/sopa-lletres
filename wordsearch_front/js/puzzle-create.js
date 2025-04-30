import { select } from "./functions.js";

const validChars = "abcdefghijklmnopqrstuvwxyzç"
const letters = [...document.querySelectorAll('.letter')];
const wordList = document.querySelector('#wordList');
const board = document.querySelector('.game-board');
let marking;
let inserting;
let inserted;
let fisrtMark;
let posLast;
const word = {
    word: '',
    coords: [],
};
let newWord;
const words = [];
const wordPlacements = [];
let yOffsetLast;
let xOffsetLast;

document.querySelector('#fillPuzzle').addEventListener('click', _ => fillPuzzle());
document.querySelector('#resetPuzzle').addEventListener('click', _ => resetPuzzle());
document.addEventListener('mouseup', _ => marking = false);
document.querySelector('#wordAdd').addEventListener('click', _ => {
    if (!inserting) {
        board.addEventListener('mousedown', handleMousedown);
        board.addEventListener('mouseover', handleMouseover);
        newWord = Object.create(word);
        newWord.word = document.querySelector('#wordInput').value;
        inserting = true;
    }
    if (inserted) {
        board.removeEventListener('mousedown', handleMousedown);
        board.removeEventListener('mouseover', handleMouseover);
        words.push(newWord);
        drawWordList();
        console.table(words);
        posLast = undefined;
        inserting = false;
        inserted = false;
    }
});

wordList.addEventListener('click', handleWordDeletion);
function handleWordDeletion(event) {
    if (event.target.type === 'button') {
        deleteWord(event.target.value)
    }
}

function handleMousedown(element) {
    element.preventDefault();
    if (!element.target.classList.contains('letter')) { return; };
    marking = true;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === element.target) {
            fisrtMark = i;
        }
    }
    let cur;
    let ind = 0;
    for (let y = -10; y <= 10; y += 10) {
        for (let x = -1; x <= 1; x++) {
            cur = fisrtMark;
            let valid = true;
            for (let i = 0; i < newWord.word.length; i++) {
                if (cur + y + x < 0) {
                    valid = false;
                    break;
                }
                cur += y + x;
            }
            wordPlacements[ind++] = valid ? x + y : null;
        }
    }
};

function handleMouseover(element) {
    element.preventDefault();
    if (!marking) { return; };
    if (!element.target.classList.contains('letter')) { return; };
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

    if (((Math.abs(yDifference) === Math.abs(xDifference)) && (Math.abs(yDifference) >= newWord.word.length - 1 || Math.abs(xDifference) >= newWord.word.length - 1))
        || ((Math.abs(yDifference) >= newWord.word.length - 1 && Math.abs(xDifference) === 0) || (Math.abs(xDifference) >= newWord.word.length - 1 && Math.abs(yDifference) === 0))) {
        clearWord(posLast, yOffsetLast, xOffsetLast);
        fillWord(yOffset, xOffset);
        drawWords();
        drawWord(newWord);

        yOffsetLast = yOffset;
        xOffsetLast = xOffset;
        posLast = fisrtMark;
    }
};

function drawWordList() {
    let html = '';
    for (const [index, word] of words.entries()) {
        html += `<li>${word.word} <button type="button" class="text-red" value="${index}">X</button></li>`
    }
    wordList.innerHTML = html;
}

function deleteWord(index) {
    const deleted = words.splice(index, 1)[0];
    for (let index of deleted.coords) {
        letters[index].value = '';
        letters[index].classList = '';
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

function clearWord(pos, yOffset, xOffset) {
    if (yOffset === undefined || xOffset === undefined || pos === undefined) {
        return;
    }

    let change = xOffset + yOffset * 10;
    let cur = pos;
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
            html += `<label><input required type="radio" name="dificultat" value="${row['id']}"> ${row['difficulty']}</label><br>`;
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