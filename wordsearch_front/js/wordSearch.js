import { select } from './functions.js';

const login = document.querySelector("#sign_in");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(login);
    const entries = formData.entries();
    let query = "call checkLogin("

    for (const [key, value] of entries) {
        query += `'${value}', `
    }

    query += ');';
    const lastIndex = query.lastIndexOf(',');
    query = query.slice(0, lastIndex) + '' + query.slice(lastIndex + 1);
    console.log(query);

}); // TODO: link login a juga, finish logica login;