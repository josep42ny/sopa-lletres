import { select } from './functions.js';

const login = document.querySelector("#sign_in");
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(login);
    let query = `select Player.id from User, Player where User.id = Player.id and username = "${formData.get('userName')}" and password = "${formData.get('password')}";`;

    select(query)
        .then(user => {
            if (user.length != 0) {
                localStorage.uid = user[0]['id'];
                window.location.href = "puzzle-select.html"
            } else {
                alert("Usuari o contrasenya incorrecta.")
            }
        });

}); // TODO: link login a juga, finish logica login;