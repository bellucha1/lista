// Lista de convidados com status
let convidados = [
    { name: "Ana", confirmed: false },
    { name: "Carlos", confirmed: true },
    { name: "João", confirmed: false },
    { name: "Alessandra", confirmed: true },
    { name: "Paula", confirmed: false },
    { name: "Marcelo", confirmed: true },
];

// Mostra lista conforme filtro
function showList(type) {
    let filtered = [];
    if (type === 'all') filtered = convidados;
    if (type === 'a') filtered = convidados.filter(g => g.name.toLowerCase().startsWith('a'));
    if (type === 'long') filtered = convidados.filter(g => g.name.length > 5);

    let html = "<ul>";
    if (filtered.length === 0) html += "<li>Nenhum convidado encontrado</li>";
    filtered.forEach(g => {
        html += `<li>${g.name} - <strong>${g.confirmed ? "Confirmado" : "Não Confirmado"}</strong></li>`;
    });
    html += "</ul>";

    document.getElementById("listContainer").innerHTML = html;
}

// Mostra/oculta formulário de adicionar
function toggleAddForm() {
    const f = document.getElementById("addForm");
    f.style.display = (f.style.display === "none" ? "block" : "none");
}

// Mostra/oculta formulário de pesquisar
function toggleSearchForm() {
    const f = document.getElementById("searchForm");
    f.style.display = (f.style.display === "none" ? "block" : "none");
}

// Adiciona novo convidado
function addGuest() {
    const name = document.getElementById("newGuestName").value.trim();
    if (name) {
        convidados.push({ name: name, confirmed: false });
        alert(`Convidado "${name}" adicionado!`);
        document.getElementById("newGuestName").value = "";
        showList('all');
    } else {
        alert("Digite um nome válido!");
    }
}

// Pesquisa convidado
function searchGuest() {
    const searchText = document.getElementById("searchGuestName").value.toLowerCase();
    const found = convidados.filter(g => g.name.toLowerCase().includes(searchText));

    let html = "<ul>";
    if (found.length === 0) html += "<li>Convidado não encontrado</li>";
    found.forEach(g => {
        html += `<li>${g.name} - <strong>${g.confirmed ? "Confirmado" : "Não Confirmado"}</strong></li>`;
    });
    html += "</ul>";

    document.getElementById("listContainer").innerHTML = html;
}
