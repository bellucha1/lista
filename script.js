// Lista de convidados
const convidados = [
    "Ana", "Carlos", "João", "Alessandra", "Paula", "Marcelo", "Amanda", 
    "Eduardo", "Alfredo", "Gustavo", "Bruna", "Lucas", "Maria", "Isabel"
];

// Função para exibir a lista conforme o botão clicado
function showList(type) {
    let listHTML = "";
    let filteredList = [];

    // Filtrando a lista conforme o tipo
    if (type === 'all') {
        filteredList = convidados;
    } else if (type === 'a') {
        filteredList = convidados.filter(name => name.toLowerCase().startsWith('a'));
    } else if (type === 'long') {
        filteredList = convidados.filter(name => name.length > 5);
    }

    // Gerando o HTML da lista
    if (filteredList.length > 0) {
        listHTML = "<ul>";
        filteredList.forEach(name => {
            listHTML += `<li>${name}</li>`;
        });
        listHTML += "</ul>";
    } else {
        listHTML = "<p>Não há nomes para mostrar nesta categoria.</p>";
    }

    // Atualizando o conteúdo da div com a lista
    document.getElementById("listContainer").innerHTML = listHTML;
}
