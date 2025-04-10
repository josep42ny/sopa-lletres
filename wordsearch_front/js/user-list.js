import select from './functions.js';

const array = await select('select * from User');

let html = '<tbody><tr>';
for (const [key, value] of Object.entries(array[0])) {
    switch (key) {
        case 'username':
        case 'firstName':
        case 'password':
            html += `<th>${key}</th>`;
            break;
    }
}
html += '</tr>';

for (const obj of array) {
    html += '<tr>';
    for (const [key, value] of Object.entries(obj)) {
        switch (key) {
            case 'username':
            case 'firstName':
            case 'password':
                html += `<td>${value}</td>`;
                break;
        }
    }
    html += '</tr>';
}

html += '</tbody>';
const table = document.querySelector('#userTable');
table.innerHTML += html;