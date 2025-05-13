import { modify, select } from './functions.js';

const form = document.querySelector('#userSignup');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const d = new FormData(form);
    let user = `
        insert into User (username, password , firstName ,lastName ,familyName ,email, birthday) values
        ('${d.get('userName')}','${d.get('password')}','${d.get('firstName')}','${d.get('lastName')}','${d.get('familyName')}','${d.get('email')}','${d.get('birthday')}');
    `;

    modify(user).then(_ => {

        select('select id from User order by id desc limit 1;').then(data =>
            modify(`insert into Player (id) values (${data[0].id});`)
        )

    });
});