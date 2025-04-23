const sidebar = document.querySelector("#sidebar")

document.querySelector("#sidebarClose").addEventListener("click", _ => {
    sidebar.style.right = "-100vw";
});

document.querySelector("#sidebarOpen").addEventListener("click", _ => {
    sidebar.style.right = "0";
});