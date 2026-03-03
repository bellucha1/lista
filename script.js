// Lista de convidados com status de confirmação
let convidados = [
    { name: "Ana", confirmed: false },
    { name: "Carlos", confirmed: true },
    { name: "João", confirmed: false },
    { name: "Alessandra", confirmed: true },
    { name: "Paula", confirmed: false },
    { name: "Marcelo", confirmed: true },
];

// Função para exibir a lista conforme o botão clicado
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

// Função para adicionar um novo convidado
function addGuest() {
    const name = document.getElementById("newGuestName").value.trim();
    if (name) {
        convidados.push({ name: name, confirmed: false });
        alert(`Convidado "${name}" adicionado!`);
        document.getElementById("newGuestName").value = ""; // Limpar campo de entrada
        showList('all'); // Atualizar lista
    } else {
        alert("Digite um nome válido!");
    }
}

// Função para pesquisar um convidado
function searchGuest() {
    const searchText = document.getElementById("searchGuestName").value.trim().toLowerCase();
    const found = convidados.filter(g => g.name.toLowerCase().includes(searchText));

    let html = "<ul>";
    if (found.length === 0) html += "<li>Convidado não encontrado</li>";
    found.forEach(g => {
        html += `<li>${g.name} - <strong>${g.confirmed ? "Confirmado" : "Não Confirmado"}</strong></li>`;
    });
    html += "</ul>";

    document.getElementById("listContainer").innerHTML = html;
}

// Função para mostrar/ocultar o formulário de adicionar convidado
function toggleAddForm() {
    const form = document.getElementById("addForm");
    form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}

// Função para mostrar/ocultar o formulário de pesquisa de convidado
function toggleSearchForm() {
    const form = document.getElementById("searchForm");
    form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}
