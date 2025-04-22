import { select, modify } from './functions.js';

updatePlayers();
function updatePlayers() {
    select(`
        select User.id, User.username
        from User, Player, Admin
        where User.id = Player.id
        and User.id not in (select Admin.id from Admin);
        `).then(players => {

        let html = '';
        if (players.length === 0) {
            html += `<option value="" disabled selected>No s'han trobat jugadors</option>`
        } else {
            for (let player of players) {
                html += `<option value="${player.id}">${player.username}</option>`;
            }
        }
        const dropdown = document.querySelector('#userDelete select');
        dropdown.innerHTML += html;
    });
}

document.querySelector('#userDelete').addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    modify(`
        delete from User
        where User.id = ${formData.get('userDelete')};
    `).then(updatePlayers);
});