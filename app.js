//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Inicializando um array vazio para armazenar os amigos
let amigos = [];

// Função para armazenar nomes
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const campoEntrada = document.getElementById('amigo');
    const nome = campoEntrada.value.trim(); // Remover espaços extras
    console.log(nome);

    // Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nome);

    // Limpar o campo de entrada
    campoEntrada.value = "";

    // Atualizar a lista de amigos no HTML
    atualizarListaAmigos();
}

// Função para atualizar a lista no HTML
function atualizarListaAmigos() {
    lista = document.getElementById('listaAmigos');

    // Limpar a lista atual
    lista.innerHTML = "";

    // Adicionar cada amigo como um item na lista
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Event Listener para garantir que o DOM esteja carregado
//document.addEventListener('DOMContentLoaded', () => {
//  const botaoAdicionar = document.querySelector('.button-add');
//botaoAdicionar.addEventListener('click', adicionarAmigo);
//});



//função para sortear um amigo
function sortearAmigo() {
    //validar se existe uma lista de amigos
    if (amigos.length == 0) {
        alert("Por favor, preencha uma lista de amigos primeiro.");
        return;
    }

    //Gerar um índice aleatório para sortear
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obter  nome sorteado
    let nomeSorteado = amigos[indiceAleatorio];

    // Mostra o resultado no elemento com id 'resultado'
        document.getElementById('resultado').innerHTML = `Amigo sorteado é, ${nomeSorteado}`;
}



