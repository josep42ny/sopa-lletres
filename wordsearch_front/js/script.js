const sidebar = document.querySelector("#sidebar")

document.querySelector("#sidebarClose").addEventListener("click", _ => {
    sidebar.style.left = "-100vw";
});

document.querySelector("#sidebarOpen").addEventListener("click", _ => {
    sidebar.style.left = "0";
});


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

    (async () => {
        await fetch("http://localhost:3000/daw/" + encodeURIComponent(query));
    })()
});

//(async () => {
//    const query = "select * from User";
//    const api = await fetch("http://localhost:3000/daw/" + encodeURIComponent(query))
//    const data = await api.json();
//
//    codi_html = "<table border=1>";
//    for (const dp of data.data) {
//        for (const [key, value] of Object.entries(dp)) {
//            codi_html = codi_html + "<tr><td>" + `${key}: ${value}` + "</td></tr>"
//        }
//    }
//
//    codi_html = codi_html + "</table>";
//    document.querySelector("#hello").innerHTML = codi_html;
//})()

//(async () => {
//    const query = "insert into Language values ('Català')";
//    await fetch("http://localhost:3000/daw/" + encodeURIComponent(query));
//})()