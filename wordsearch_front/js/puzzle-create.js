import { modify, select } from "./functions.js";

const validChars = "abcdefghijklmnopqrstuvwxyzç";
const lettersElem = document.querySelectorAll('.letter');
const wordListElem = document.querySelector('#wordList');
const boardElem = document.querySelector('#gameBoard');

let isInserting = false;
let firstIndex;
let newWord;

const words = [];

// event listeners
document.addEventListener('mouseup', handleMouseup);
document.addEventListener('click', e => {
    switch (e.target.id) {
        case 'submit':
            handleSubmit(e);
            break;
        case 'fillPuzzle':
            fillPuzzle(e);
            break;
        case 'resetPuzzle':
            resetPuzzle(e);
            break;
        case 'wordAdd':
            handleWordInsertion(e);
            break;
        case 'wordDel':
            handleWordDeletion(e);
            break;
        default:
            break;
    }
});


// carregar dificultats
select('select id, difficulty from Difficulty')
    .then(rows => {
        let html = '';
        for (const row of rows) {
            html += `<label><input required type="radio" name="difficulty" value="${row['id']}"> ${row['difficulty']}</label>`;
        }
        document.querySelector('#difficulty').innerHTML = html;
    });

// event functions
function handleWordInsertion() {
    if (typeof boardElem.onmousedown !== 'function' && typeof boardElem.onmouseover !== 'function') {
        boardElem.addEventListener('mousedown', handleMousedown);
        boardElem.addEventListener('mouseover', handleMouseover);
        isInserting = false;
    }
}

function handleWordDeletion(e) {
    if (e.target.type === 'button') {
        deleteWord(e.target.value);
    }
}

function handleMouseup() {
    boardElem.removeEventListener('mousedown', handleMousedown);
    boardElem.removeEventListener('mouseover', handleMouseover);
    isInserting = false;
}

function handleMousedown(e) {
    e.preventDefault();
    if (!e.target.classList.contains('letter')) { return; };
    for (let i = 0; i < lettersElem.length; i++) {
        if (lettersElem[i] === e.target) {
            firstIndex = i;
        }
    }
    isInserting = true;
    newWord = createWord();
};

function handleMouseover(e) {
    e.preventDefault();
    if (!isInserting || !e.target.classList.contains('letter')) { return; }
    let hoverIndex;
    for (let i = 0; i < lettersElem.length; i++) {
        if (lettersElem[i] === e.target) {
            hoverIndex = i;
        }
    }

    let yAxis = (Math.floor(hoverIndex / 10)) - (Math.floor(firstIndex / 10));
    let xAxis = (Math.floor(hoverIndex % 10)) - (Math.floor(firstIndex % 10));
    let yOffset = Math.min(Math.max(yAxis, -1), 1);
    let xOffset = Math.min(Math.max(xAxis, -1), 1);

    if (Math.abs(yAxis) === Math.abs(xAxis) && (Math.abs(yAxis) >= newWord.word.length - 1)
        || (Math.abs(yAxis) >= newWord.word.length - 1 && Math.abs(xAxis) === 0)
        || (Math.abs(xAxis) >= newWord.word.length - 1 && Math.abs(yAxis) === 0)) {

        addWord(yOffset, xOffset);
        drawWordList();
        drawWords();
        isInserting = false;
    }
};

function resetPuzzle() {
    for (let i = 0; i < lettersElem.length; i++) {
        lettersElem[i].value = '';
        lettersElem[i].classList = 'letter';
    }
    drawWords();
}

function fillPuzzle() {
    for (const cell of lettersElem) {
        if (cell.value.trim() === '') {
            cell.value = validChars[Math.floor(Math.random() * validChars.length)];
        }
    }
    drawWords();
}

function handleSubmit() {
    let query = 'insert into temp (word, start_pos, end_pos, letter, pos) values ';
    /*if (words.length < 10) {
        return;
    }*/
    for (let i = 0; i < lettersElem.length; i++) {
        if (i < words.length) {
            query += `('${words[i].word}', ${words[i].coords[0]}, ${words[i].coords[words[i].coords.length - 1]},`;
        } else {
            query += `(null, null, null,`;
        }
        query += ` '${lettersElem[i].value}', ${i}),`;
    }
    query = query.replace(/.$/, ';')
    const proc = `call createPuzzle(${document.querySelector('input[name="difficulty"]:checked').value}, ${localStorage.getItem('aid')}, '${document.querySelector('#puzzleName').value}');`;

    modify(query).then(modify(proc));
}

// actualitzacions UI
function deleteWord(index) {
    const deleted = words.splice(index, 1)[0];
    for (let index of deleted.coords) {
        lettersElem[index].value = '';
        lettersElem[index].classList.remove('cell-highlighted');
        lettersElem[index].disabled = false;
    }
    drawWords();
    drawWordList();
}

function drawWords() {
    for (let word of words) {
        drawWord(word);
    }
}

function drawWord(word) {
    const le = word.word.split('');
    let letter = 0;
    for (let pos of word.coords) {
        lettersElem[pos].value = le[letter++];
        lettersElem[pos].classList.add('cell-highlighted');
        lettersElem[pos].disabled = true;
    }
}

function drawWordList() {
    let html = '';
    for (const [index, word] of words.entries()) {
        html += `<div><button id="wordDel" type="button" class="delete" value="${index}">X</button> ${word.word}</div>`;
    }
    wordListElem.innerHTML = html;
}

function createWord() {
    return {
        word: document.querySelector('#wordInput').value,
        coords: []
    };
}

function addWord(yOffset, xOffset) {
    if (!newWord || yOffset === undefined || xOffset === undefined) return;

    let offset = xOffset + yOffset * 10;
    let cur = firstIndex;
    newWord.coords = [];
    for (let i = 0; i < newWord.word.length; i++) {
        newWord.coords.push(cur);
        cur += offset;
    }

    words.push(newWord);
}
