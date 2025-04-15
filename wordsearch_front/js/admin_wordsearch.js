import { select } from './functions.js';

const login = document.querySelector("#adminLogin");
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(login);
    let query = `select Admin.id from User, Admin where User.id = Admin.id and username = "${formData.get('userName')}" and password = "${formData.get('password')}";`;

    select(query)
        .then(user => {
            if (user.length != 0) {
                localStorage.aid = user[0]['id'];
                window.location.href = "puzzle-create.html"
            } else {
                alert("Usuari o contrasenya incorrecta.")
            }
        });

});