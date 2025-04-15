async function select(query) {
    const api = await fetch("http://localhost:3000/daw/" + encodeURIComponent(query));
    const data = await api.json();
    return data.data;
};

async function modify(query) {
    await fetch("http://localhost:3000/daw/" + encodeURIComponent(query));
}

export { select, modify };