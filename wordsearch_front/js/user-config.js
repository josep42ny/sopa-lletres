import { select, modify } from './functions.js';

const array = await select('select * from Color');

let html_color_setting = '';
for (const obj of array) {
    html_color_setting += '<option value = "';
    for (const [key, value] of Object.entries(obj)) {
        if (key == 'id') {
            html_color_setting += `${value}">`;
        }
        if (key == 'name') {
            html_color_setting += `${value}</option>`;
        }
    }
}

console.log(html_color_setting);
const button = document.querySelector('#theme');
const back = document.querySelector('#backgroundTheme');
button.innerHTML += html_color_setting;
back.innerHTML += html_color_setting;


const langs = await select('select * from Language');

let html_language_setting = '';
for (const obj of langs) {
    html_language_setting += '<option value = "';
    for (const [key, value] of Object.entries(obj)) {
        if (key == 'id') {
            html_language_setting += `${value}">`;
        }
        if (key == 'name') {
            html_language_setting += `${value}</option>`;
        }
    }
}

console.log(html_language_setting);
const language = document.querySelector('#language');
language.innerHTML += html_language_setting;

// button on click submit --> where id_ususari = id_sesio.

//await a.modify("insert into User (firstName, lastName, familyName, birthday, username, password, email) values('Josep', 'Fortuny', 'Ferreiro', '2004-08-13', 'josepHottDaddy69', 'password', 'josep@fortuny.cum')");