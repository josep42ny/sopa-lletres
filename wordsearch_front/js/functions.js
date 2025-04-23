async function select(query) {
    const api = await fetch("http://localhost:3000/daw/" + encodeURIComponent(query));
    const data = await api.json();
    return data.data;
};

async function modify(query) {
    await fetch("http://localhost:3000/daw/" + encodeURIComponent(query));
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}

export { select, modify, toTitleCase };