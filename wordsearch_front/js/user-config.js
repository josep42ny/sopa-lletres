import { select, modify } from './functions.js';

document.querySelector('#userConfig').addEventListener('submit', handleSubmit);

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

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bg = formData.get('backgroundTheme');
    const bt = formData.get('theme');

    const uid = localStorage.getItem('uid');
    if (uid !== null) {
        modify(`update Player set tableColorId = ${bg}, buttonColorId = ${bt} where id = ${uid};`)
    }
}
