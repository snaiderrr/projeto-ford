const checkbox1 = document.getElementById("aceite");
const botao = document.getElementById("enviar");

checkbox1.addEventListener("change", () => {
    botao.disabled = !checkbox1.checked;
});