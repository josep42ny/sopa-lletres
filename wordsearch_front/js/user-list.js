import { select } from './functions.js';

const users = await select(`
    select 
        id as uid,
        concat(firstName, ' ', lastName, ' ', familyName) as fullName,
        userName,
        password,
        case when exists (select Admin.id from Admin where Admin.id = uid) then 'admin' else 'player' end as role
    from User
`);

let html = `
    <tbody>
        <tr>
            <th>Nom</th>
            <th>Usuari</th>
            <th>Contrassenya</th>
            <th>Rol</th>
        </tr>

`;

for (const user of users) {
    let role = '';
    if (user.role === 'player') {
        role = '<span class="chip-green">Jugador</span>';
    } else {
        role = '<span class="chip-blue">Admin</span>';
    }

    html += `
        <tr>
            <td>${user.fullName}</td>
            <td>${user.userName}</td>
            <td>${user.password}</td>
            <td>${role}</td>
        </tr>
    `;
}

html += '</tbody>';

const table = document.querySelector('#userTable');
table.innerHTML += html;