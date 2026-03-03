// Lista de convidados com status de confirmação
let convidados = [
    { name: "Ana", confirmed: false },
    { name: "Carlos", confirmed: true },
    { name: "João", confirmed: false },
    { name: "Alessandra", confirmed: true },
    { name: "Paula", confirmed: false },
    { name: "Marcelo", confirmed: true },
    { name: "Amanda", confirmed: false },
    { name: "Eduardo", confirmed: true },
    { name: "Alfredo", confirmed: false },
    { name: "Gustavo", confirmed: true },
    { name: "Bruna", confirmed: false },
    { name: "Lucas", confirmed: true },
    { name: "Maria", confirmed: false },
    { name: "Isabel", confirmed: true }
];

// Função para exibir a lista conforme o botão clicado
function showList(type) {
    let listHTML = "";
    let filteredList = [];

    if (type === 'all') {
        filteredList = convidados;
    } else if (type === 'a') {
        filteredList = convidados.filter(g => g.name.toLowerCase().startsWith('a'));
    } else if (type === 'long') {
        filteredList = convidados.filter(g => g.name.length > 5);
    }

    if (filteredList.length > 0) {
        listHTML = "<ul>";
        filteredList.forEach(guest => {
            const confirmationStatus = guest.confirmed ? "Confirmado" : "Não Confirmado";
            listHTML += `<li>${guest.name} - <strong>${confirmationStatus}</strong></li>`;
        });
        listHTML += "</ul>";
    } else {
        listHTML = "<p>Não há nomes para mostrar nesta categoria.</p>";
    }

    document.getElementById("listContainer").innerHTML = listHTML;
}

// Função para adicionar um convidado
function addGuest() {
    const newGuestName = document.getElementById("newGuestName").value.trim();
    if (newGuestName !== "") {
        convidados.push({ name: newGuestName, confirmed: false });
        alert(`Convidado ${newGuestName} adicionado!`);
        document.getElementById("newGuestName").value = "";
        toggleAddForm();
        showList('all');
    } else {
        alert("Por favor, insira o nome do convidado.");
    }
}

// Função para pesquisar um convidado
function searchGuest() {
    const searchName = document.getElementById("searchGuestName").value.trim().toLowerCase();
    const foundGuests = convidados.filter(guest => guest.name.toLowerCase().includes(searchName));

    let searchResultHTML = "";
    if (foundGuests.length > 0) {
        searchResultHTML = "<ul>";
        foundGuests.forEach(guest => {
            const confirmationStatus = guest.confirmed ? "Confirmado" : "Não Confirmado";
            searchResultHTML += `<li>${guest.name} - <strong>${confirmationStatus}</strong></li>`;
        });
        searchResultHTML += "</ul>";
    } else {
        searchResultHTML = "<p>Convidado não encontrado.</p>";
    }

    document.getElementById("listContainer").innerHTML = searchResultHTML;
}

// Função para exibir o formulário de adicionar convidado
function toggleAddForm() {
    const form = document.getElementById("
                                         
