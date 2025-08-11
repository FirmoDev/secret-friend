//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// pode deixar :)

// capturando informações no campo quando eu clicar no botão "adicionar"
let nomeDoAmigo = []; // inicia sem nada
let nomeRestantes = []; //array para gerenciar nomes e imediatamente remove-los, evitando repetição de nomes sorteados.
let ultimoNomeSorteado = [];



function capturandoNomes() {
    let campo = document.getElementById("amigo");
    let valor = campo.value;
    nomeDoAmigo.push(valor);
    nomeRestantes.push(valor);

    console.log(`O nome inserido foi: ${nomeDoAmigo}`);

    //condicional para verificar que o usuario inseriu nome antes de clicar me add
    if (!valor) {
        alert("Insira um nome antes de adicionar!");
    }

    alert(`Nome: ${valor} foi inserido!`);
    // // quando nome for capturado, quer que seja limpado o campo para adicionar mais nomes se a pessoa quiser:
    limpaCampo();
    console.log("Limpando campo para proximo nome");
}

function limpaCampo() {
    document.getElementById("amigo").value = ""; //setando valor de campo para nulo
}

function sortearNomes() {
    if (nomeDoAmigo.length === 0) {
        alert("Nenhum nome cadastrado. Adicione nomes primeiro.");
        return;
    }

    // se o pool estiver vazio (todos já sorteados), recarrega com todos os nomes
    if (nomeRestantes.length === 0) {
        nomeRestantes = [...nomeDoAmigo];
    }

    // sorteia um índice válido dentro de nomesRestantes
    const indiceSorteado = Math.floor(Math.random() * nomeRestantes.length);

    // remove o nome do pool e o obtém (evita repetições até esgotar)
    const [amigo] = nomeRestantes.splice(indiceSorteado, 1);

    ultimoNomeSorteado = amigo;
    console.log("Sorteado:", amigo);

    mensagemDeResultado();

}

function mensagemDeResultado() {
    const mensagem = document.getElementById("section-title");
    if (!mensagem) {
        // fallback caso o elemento não existir
        alert(`O nome sorteado foi: ${ultimoNomeSorteado}`);
        return;
    }
    mensagem.innerText = `O nome sorteado foi: ${ultimoNomeSorteado}`;
}






