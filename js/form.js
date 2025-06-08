const checkbox1 = document.getElementById("checkbox1");
const botao = document.getElementById("enviar");

checkbox1.addEventListener("change", () => {
    botao.disabled = !checkbox1.checked;
});