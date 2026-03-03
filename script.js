// Lista de convidados (simulada)
let convidados = [
    "Ana", "Lucas", "Beatriz", "Carlos", "Amanda", "Rafael", "Juliana", "Gabriel", "Paula", "Eduardo"
];

// Função para mostrar todos os convidados
function showConvidados() {
    alert("Lista de Convidados: " + convidados.join(", "));
}

// Função para mostrar nomes que começam com "A"
function showNomesA() {
    let nomesA = convidados.filter(nome => nome.startsWith('A'));
    alert("Convidados que começam com A: " + nomesA.join(", "));
}

// Função para mostrar nomes com mais de 5 letras
function showNomesMaiorQueCinco() {
    let nomesMaiorQueCinco = convidados.filter(nome => nome.length > 5);
    alert("Convidados com mais de 5 letras: " + nomesMaiorQueCinco.join(", "));
}

// Função para adicionar um novo convidado
function adicionarConvidado() {
    let nome = prompt("Digite o nome do convidado a ser adicionado:");
    if (nome) {
        convidados.push(nome);
        alert("Convidado adicionado: " + nome);
    }
}

// Função para mostrar a confirmação dos convidados
function confirmacaoConvidados() {
    alert("Confirmação de presença ainda não implementada.");
}

// Função para pesquisar um convidado
function pesquisarConvidados() {
    let pesquisa = prompt("Digite o nome do convidado para pesquisar:");
    let resultado = convidados.filter(nome => nome.toLowerCase().includes(pesquisa.toLowerCase()));
    alert("Resultado da pesquisa: " + resultado.join(", "));
}

// Função para ordenar a lista de convidados por ordem alfabética
function filtroOrdemAlfabetica() {
    let ordemAlfabetica = [...convidados].sort();
    alert("Convidados em ordem alfabética: " + ordemAlfabetica.join(", "));
}

// Função para exibir informações sobre o evento
function informacoesEvento() {
    alert("Evento: Festa de Aniversário\nData: 15 de Abril de 2026\nLocal: Salão de Eventos");
}

// Função para mostrar os nomes dos convidados em maiúsculas
function nomesMaiusculos() {
    let nomesMaiusculos = convidados.map(nome => nome.toUpperCase());
    alert("Convidados em maiúsculas: " + nomesMaiusculos.join(", "));
}
