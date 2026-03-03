const gerenciador = {
    convidados: [
        { nome: "Amanda Silva", confirmado: true, data: "2024-03-01" },
        { nome: "Bruno Rocha", confirmado: false, data: "2024-03-05" },
        { nome: "Carlos Souza", confirmado: true, data: "2024-03-02" },
        { nome: "Daniela Lima", confirmado: true, data: "2024-03-04" }
    ],

    // Renderiza as listas na tela
    render: function(lista) {
        const out = document.getElementById('lista-exibicao');
        if (lista.length === 0) {
            out.innerHTML = "<p>Nenhum registro encontrado.</p>";
            return;
        }
        let html = "<ul>";
        lista.forEach(c => {
            html += `<li><span>${c.nome}</span> <span>${c.confirmado ? '✅' : '⏳'}</span></li>`;
        });
        out.innerHTML = html + "</ul>";
    },

    limparControles: function() {
        document.getElementById('controles').innerHTML = "";
    },

    // 1. Lista Geral
    listarTodos: function() {
        this.limparControles();
        this.render(this.convidados);
    },

    // 2. Nomes com A
    filtrarLetraA: function() {
        this.limparControles();
        const res = this.convidados.filter(c => c.nome.toUpperCase().startsWith('A'));
        this.render(res);
    },

    // 3. Mais de 5 letras
    filtrarMaisDe5: function() {
        this.limparControles();
        const res = this.convidados.filter(c => c.nome.length > 5);
        this.render(res);
    },

    // 4. Adicionar
    exibirFormulario: function() {
        const ctrl = document.getElementById('controles');
        ctrl.innerHTML = `
            <input type="text" id="novoNome" placeholder="Nome do Convidado">
            <button onclick="gerenciador.salvarConvidado()">Confirmar Cadastro</button>
        `;
    },

    salvarConvidado: function() {
        const nome = document.getElementById('novoNome').value;
        if(nome) {
            this.convidados.push({ nome: nome, confirmado: false, data: new Date().toISOString() });
            this.listarTodos();
        }
    },

    // 5. Ver Confirmações
    verConfirmados: function() {
        this.limparControles();
        const res = this.convidados.filter(c => c.confirmado);
        this.render(res);
    },

    // 6. Pesquisar
    exibirPesquisa: function() {
        const ctrl = document.getElementById('controles');
        ctrl.innerHTML = `<input type="text" placeholder="Digite o nome..." onkeyup="gerenciador.buscar(this.value)">`;
    },

    buscar: function(termo) {
        const res = this.convidados.filter(c => c.nome.toLowerCase().includes(termo.toLowerCase()));
        this.render(res);
    },

    // 7. Filtros Especiais
    exibirFiltros: function() {
        const ctrl = document.getElementById('controles');
        ctrl.innerHTML = `
            <button onclick="gerenciador.ordenar('AZ')">A-Z</button>
            <button onclick="gerenciador.ordenar('DATA')">Data Confirmação</button>
            <button onclick="gerenciador.ordenar('TAMANHO')">Qtd Letras</button>
        `;
    },

    ordenar: function(tipo) {
        let lista = [...this.convidados];
        if(tipo === 'AZ') lista.sort((a,b) => a.nome.localeCompare(b.nome));
        if(tipo === 'DATA') lista.sort((a,b) => new Date(a.data) - new Date(b.data));
        if(tipo === 'TAMANHO') lista.sort((a,b) => a.nome.length - b.nome.length);
        this.render(lista);
    },

    // 8. Info Evento
    infoEvento: function() {
        this.limparControles();
        document.getElementById('lista-exibicao').innerHTML = `
            <h3>Detalhes do Evento</h3>
            <p><strong>Local:</strong> Salão de Festas Imperial</p>
            <p><strong>Horário:</strong> 20:00h</p>
            <p><strong>Traje:</strong> Marrom e Dourado</p>
        `;
    },

    // 9. Tudo Maiúsculo
    maiusculas: function() {
        this.limparControles();
        const listaM = this.convidados.map(c => ({...c, nome: c.nome.toUpperCase()}));
        this.render(listaM);
    }
};
