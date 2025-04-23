import { select } from './functions.js';
const sidebar = document.querySelector("#sidebar");
const username = document.querySelector("#sidebarAdmin");

select(`select User.username from User where User.id = ${localStorage.getItem('aid')}`).then(data => {
    username.textContent = data[0].username;
});

document.querySelector("#sidebarClose").addEventListener("click", _ => {
    sidebar.style.right = "-100vw";
});

document.querySelector("#sidebarOpen").addEventListener("click", _ => {
    sidebar.style.right = "0";
});
