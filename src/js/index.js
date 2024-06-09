const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", () => {
    const cartoes = document.querySelectorAll(".cartao");
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;

    if (cartaoAtual > 9) {
        cartaoAtual = 0;
        cartoes[cartaoAtual].classList.add("selecionado");
    } else {
        cartoes[cartaoAtual].classList.add("selecionado");
    }
})

btnVoltar.addEventListener("click", () => {
    const cartoes = document.querySelectorAll(".cartao");
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;

    if (cartaoAtual < 0) {
        cartaoAtual = 9;
        cartoes[cartaoAtual].classList.add("selecionado")
    } else {
        cartoes[cartaoAtual].classList.add("selecionado")
    }
})