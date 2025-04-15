import { modify, select } from "./functions.js";

const alphabet = "abcdefghijklmnopqrstuvwxyzç"
const letters = [...document.querySelectorAll('.letter')];

document.querySelector('#fillPuzzle').addEventListener('click', e => {
    e.preventDefault();

    for (const letter of letters) {
        if (letter.value == '' | null) {
            letter.value = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    }
});

document.querySelector('#resetPuzzle').addEventListener('click', e => {
    e.preventDefault();

    for (const letter of letters) {
        letter.value = '';
    }
});

(
    _ => {
        select('select id, difficulty from Difficulty')
            .then(rows => {
                let html = '';
                for (const row of rows) {
                    html += `<label><input required type="radio" name="dificultat" value="${row['id']}"> ${row['difficulty']}</label><br>`;
                }
                document.querySelector('#difficulty').innerHTML = html;
            });
    }
)();

(
    _ => {
        let query = 'insert into Letter (puzzleId, letter, posX, posY) values ';

        // Guard for incomplete puzzle
        for (const letter of letters) {
            if (letter.value === '') {
                return;
            }
        }

        let count = 0;
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                query += `(1, '${letters[count++].value}', ${col}, ${row}),`;
            }
        }
        const lastIndex = query.lastIndexOf(',');
        query = query.slice(0, lastIndex) + ';' + query.slice(lastIndex + 1);

        modify(query);
    }
)();