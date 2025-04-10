import a from './functions.js';

const array = await a.select('select * from Color');

let html = '';
for (const obj of array) {
    html += '<option value = "';
    for (const [key, value] of Object.entries(obj)) {
        if (key == 'id') {
            html += `${value}">`;
        }
        if (key == 'nom') {
            html += `${value}</option>`;
        }
    }
}

console.log(html);
const button = document.querySelector('#theme');
const back = document.querySelector('#backgroundTheme');
button.innerHTML += html;
back.innerHTML += html;

//await a.modify("insert into User (firstName, lastName, familyName, birthday, username, password, email) values('Josep', 'Fortuny', 'Ferreiro', '2004-08-13', 'josepHottDaddy69', 'password', 'josep@fortuny.cum')");