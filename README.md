# README: Gerenciador de Lista de Amigos e Sorteio

## Sobre o Projeto

Este projeto é um gerenciador de lista de amigos com funcionalidade de sorteio. Os usuários podem adicionar nomes à lista e sortear um nome aleatório entre os amigos cadastrados. É uma aplicação prática para situações como organização de um amigo secreto ou eventos similares.

# Funcionalidades

## Adicionar Amigo:

Captura o nome inserido no campo de entrada e o adiciona à lista.

Valida se o campo de entrada não está vazio antes de adicionar.

# Exibir Lista de Amigos:

Atualiza dinamicamente a lista no HTML conforme os nomes são adicionados.

## Sortear Amigo:

Verifica se há amigos disponíveis para sorteio.

Gera um índice aleatório para selecionar um amigo da lista.

Exibe o resultado do sorteio diretamente na interface.

# Como Usar

## Adicionar Amigos:

Insira o nome no campo de texto e clique no botão "Adicionar Amigo".

O nome será adicionado à lista exibida abaixo do campo de entrada.

## Sortear Amigo:

Clique no botão "Sortear Amigo".

Se houver amigos na lista, um nome será sorteado e exibido.

Caso a lista esteja vazia, será exibido um alerta informando que não há amigos para sortear.

# Estrutura do Código

## HTML

O HTML contém:

Um campo de entrada para nomes.

Botões para adicionar amigos e sortear um amigo.

Uma lista não ordenada para exibir os nomes adicionados.

Uma seção para exibir o resultado do sorteio.

## JavaScript

O JavaScript implementa:

Adicionar Amigos:

Captura o valor do campo de entrada.

Valida se o campo não está vazio.

Atualiza o array amigos e a lista exibida no HTML.

## Sortear Amigos:

Valida se o array amigos não está vazio.

Usa Math.random() e Math.floor() para selecionar um índice aleatório.

Exibe o amigo sorteado no HTML.

## Código de Exemplo

HTML

<div>
    <input type="text" id="campo-nome" placeholder="Insira o nome do amigo">
    <button onclick="adicionarAmigo()">Adicionar Amigo</button>
    <button onclick="sortearAmigo()">Sortear Amigo</button>
</div>
<ul id="lista-amigos"></ul>
<div id="resultado"></div>

JavaScript

let amigos = [];

function adicionarAmigo() {
    const campoEntrada = document.getElementById('campo-nome');
    const nome = campoEntrada.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    campoEntrada.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

## Como Testar

Crie um arquivo index.html e copie o código HTML fornecido.

Crie um arquivo app.js e copie o código JavaScript fornecido.

Abra o arquivo index.html em um navegador.

Teste as funcionalidades de adicionar e sortear amigos.

Melhorias Futuras

Permitir remover amigos da lista.

Adicionar estilização para melhorar a interface.

Salvar a lista de amigos no armazenamento local do navegador (LocalStorage).

## Tecnologias Usadas

 HTML

CSS

JavaScript

## Contribuição

Sinta-se à vontade para sugerir melhorias ou relatar problemas criando uma issue no repositório.

