if (localStorage.getItem('aid') === null) {
    window.location.replace("./admin_wordSearch.html");
}

document.querySelector('#adminLogout').addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem('aid');
    window.location.replace("./admin_wordSearch.html");
})