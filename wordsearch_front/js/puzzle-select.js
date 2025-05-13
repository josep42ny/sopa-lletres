import { select } from "./functions.js";

const uid = localStorage.getItem('uid');
const dropdown = document.querySelector('#puzzleDropdown');
const from = document.querySelector('#puzzleSelect');

let query = '';
if (uid !== null) {
    query = `
        select p.id, p.name
        from puzzle p
        where not exists (
            select 1
            from puzzle_player pp
            where pp.puzzleId = p.id and pp.playerId = ${uid}
        );
    `;
} else {
    query = 'select id, name from Puzzle';
}

select(query)
    .then(data => {
        if (data.length === 0) {
            from.setAttribute('action', '#');
            return;
        }
        let selectHtml = '';
        for (let puzzle of data) {
            selectHtml += `<option value="${puzzle.id}">${puzzle.name}</option>`;
        }
        dropdown.innerHTML = selectHtml;
    });