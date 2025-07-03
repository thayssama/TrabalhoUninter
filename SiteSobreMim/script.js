document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao");
    const mensagem = document.getElementById("mensagem");


    botao.addEventListener("click", function () {
        mensagem.style.display = "block"
    });
}); 