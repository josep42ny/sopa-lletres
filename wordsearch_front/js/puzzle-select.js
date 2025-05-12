import { select } from "./functions.js";

const dropdown = document.querySelector('#puzzleSelect');

select(`
    select id, name
    from Puzzle`)
    .then(data => {
        let selectHtml = '';
        for (let puzzle of data) {
            selectHtml += `<option value="${puzzle.id}">${puzzle.name}</option>`;
        }
        dropdown.innerHTML = selectHtml;
    });