import { modify } from './functions.js';

const form = document.querySelector('#userSignup');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const entries = formData.entries();
    let query = 'insert into User (username, password , firstName ,lastName ,familyName ,email, birthday) values (';

    for (const [key, value] of entries) {
        if (key == 'repeatPassword') {
            continue;
        }
        query += `'${value}', `;

    }
    query += ');';
    const lastIndex = query.lastIndexOf(',');
    query = query.slice(0, lastIndex) + '' + query.slice(lastIndex + 1);

    modify(query);
});