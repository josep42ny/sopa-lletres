import { select } from './functions.js';

const data = await select(`
    select 
        puzz.name,
        User.username,
        Puzzle_Player.score,
        Puzzle_Player.score - (select round(avg(score),1) from Puzzle_Player where Puzzle_Player.puzzleId = puzz.id) as difference
    from User, Player, Puzzle_Player, Puzzle as puzz
    where User.id = Player.id
    and Player.id = Puzzle_Player.playerId
    and Puzzle_Player.puzzleId = puzz.id
    order by puzz.name asc, Puzzle_Player.score desc;
`);

let html = `
    <tbody>
        <tr>
            <th>Sopa</th>
            <th>Usuari</th>
            <th>Punts</th>
            <th>Diferencia</th>
        </tr>
`;

for (const entry of data) {
    let diff = '';
    if (entry.difference >= 0) {
        diff = `<span class="text-green">+${entry.difference}</span>`;
    } else {
        diff = `<span class="text-red">${entry.difference}</span>`;
    }

    html += `
        <tr>
            <td>${entry.name}</td>
            <td>${entry.username}</td>
            <td>${entry.score}</td>
            <td>${diff}</td>
        </tr>
    `;
}

html += '</tbody>';

const table = document.querySelector('#scoreTable');
table.innerHTML += html;