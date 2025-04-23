import { select, modify } from './functions.js';

updatePuzzles();
function updatePuzzles() {
    select(`
        select Puzzle.id, Puzzle.name
        from Puzzle;
        `).then(puzzles => {

        let html = '';
        if (puzzles.length === 0) {
            html = `<span>No s'han trobat sopes</span>`
        } else {
            for (let puzzle of puzzles) {
                html += `<label>${puzzle.name} <input type="checkbox" name="puzzles" value="${puzzle.id}"></label>`;
            }
        }
        html += '<button type="submit">Elimina</button>';
        const form = document.querySelector('#puzzleDelete');
        form.innerHTML = html;
    });
}

document.querySelector('#puzzleDelete').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const puzzleIds = formData.getAll('puzzles');

    let delQuery = '('
    for (let id of puzzleIds) {
        delQuery += id + ',';
    }
    const lastIndex = delQuery.lastIndexOf(',');
    delQuery = delQuery.slice(0, lastIndex) + ')' + delQuery.slice(lastIndex + 1);

    modify(`
        delete from Puzzle
        where id in ${delQuery};
    `).then(updatePuzzles);
});