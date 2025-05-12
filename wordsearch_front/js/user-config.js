import { select, modify } from './functions.js';

document.querySelector('#userConfig').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (let entry of formData) {
        // todo
        console.log("🚀 ~ document.querySelector ~ entry:", entry)
    }
});

select(`select * from Language;`).then(langs => {
    let langHtml = '';
    for (let lang of langs) {
        langHtml += `<option value="${lang.id}">${lang.name}</option>`;
    }
    document.querySelector('#language').innerHTML = langHtml;
});

select(`select * from Color;`).then(colors => {
    let colorHtml = '';
    for (let color of colors) {
        colorHtml += `<option value="${color.id}">${color.name}</option>`;
    }
    document.querySelector('#theme').innerHTML = colorHtml;
    document.querySelector('#backgroundTheme').innerHTML = colorHtml;
});

select(`select Color.hex from Color, Player where Color.id = Player.tableColorId`).then(table => {
    for (const [key, value] of Color.hex(colores)) {
        document.documentElement.style.setProperty(`--bg-color:`, value);
    }
});

select(`select Color.hex from Color, Player where Color.id = Player.buttonColorId`).then(button => {
    for (const [key, value] of Color.hex(colores)) {
        document.documentElement.style.setProperty(`--bt-dark:`, value);
    }
});