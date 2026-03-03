// Lista de convidados com status de confirmação
let convidados = [
    { name: "Ana", confirmed: false },
    { name: "Carlos", confirmed: true },
    { name: "João", confirmed: false },
    { name: "Alessandra", confirmed: true },
    { name: "Paula", confirmed: false },
    { name: "Marcelo", confirmed: true },
    { name: "Amanda", confirmed: true },
    { name: "Bruna", confirmed: false },
    { name: "Lucas", confirmed: true }
];

// Função para exibir a lista conforme o botão clicado
function showList(type) {
    let filteredList = [];
    if (type === 'all') {
        filteredList = convidados;
    } else if (type === 'a') {
        filteredList = convidados.filter(c => c.name.toLowerCase().startsWith('a'));
    } else if (type === 'long') {
        filteredList = convidados.filter(c => c.name.length > 5);
    }

    let html = "<ul>";
    filteredList.forEach(c => {
        const status = c.confirmed ? "Confirmado" : "Não Confirmado";
        html += `<li>${c.name} - <strong>${status}</strong></li>`;
    });
    html += "</ul>";

    document.getElementById("listContainer").innerHTML = html;
}

// Função para adicionar um novo convidado
function addGuest() {
    const name = document.getElementById("newGuestName").value.trim();
    if (name) {
        convidados.push({ name: name, confirmed: false });
        alert(`${name} adicionado como convidado!`);
        document.getElementById("newGuestName").value = "";
        toggleAddForm();
    } else {
        alert("Digite um nome válido!");
    }
}

// Função para pesquisar um convidado
function searchGuest() {
    const searchName = document.getElementById("searchGuestName").value.trim().toLowerCase();
    const result = convidados.filter(c => c.name.toLowerCase().includes(searchName));

    let html = "<ul>";
    if (result.length > 0) {
        result.forEach(c => {
            const status = c.confirmed ? "Confirmado" : "Não Confirmado";
            html += `<li>${c.name} - <strong>${status}</strong></li>`;
        });
    } else {
        html += "<li>Convidado não encontrado.</li>";
    }
    html += "</ul>";
    document.getElementById("listContainer").inner
    
