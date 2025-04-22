import { select } from './functions.js';

const players = await select(`
    select User.username, sum(score) as score
    from User, Player, Puzzle_Player
    where User.id = Player.id
    and Player.id = Puzzle_Player.playerId
    group by Player.id
    order by score desc
    limit 3;
`);

const displayOrder = [1, 0, 2];
const medals = ['🏅', '🥈', '🥉'];

let html = '';
for (let player of displayOrder) {
    if (players[player] === undefined) {
        html += `
            <div class="card">
                <span>${medals[player]}</span>
                Ranking lliure!
                <small>Podríes ser tu</small>
            </div>
        `;
    } else {
        html += `
            <div class="card">
                <span>${medals[player]}</span>
                ${players[player].username}
                <small>${players[player].score} punts</small>
            </div>
        `;
    }

}

const cards = document.querySelector('#userTop');
cards.innerHTML += html;