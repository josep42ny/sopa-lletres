const sidebar = document.querySelector("#sidebar")

document.querySelector("#sidebarClose").addEventListener("click", _ => {
    sidebar.style.left = "-100vw";
});

document.querySelector("#sidebarOpen").addEventListener("click", _ => {
    sidebar.style.left = "0";
});