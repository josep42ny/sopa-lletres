import { select } from './functions.js';
const uid = localStorage.getItem('uid');
const table = document.querySelector('#scores');
let html = `
    <tbody>
        <tr>
            <th>Sopa</th>
            <th>Punts</th>
        </tr>
`;

if (uid === null) {
    // mostra avis de inici de sesió
} else {
    const data = await select(`
        select Puzzle.name, Puzzle_Player.score
        from Puzzle, Puzzle_Player
        where Puzzle.id = Puzzle_Player.puzzleId
        and Puzzle_Player.playerId = ${uid};
    `);

    for (const entry of data) {
        html += `
            <tr>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            </tr>
        `;
    }
}

html += '</tbody>';
table.innerHTML = html;