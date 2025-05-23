function comparar () {
    let preco = 120000;
    let aviso = document.getElementById("aviso");

    // Verifica o valor do carro e mostra uma avaliação
    if (preco >= 150000) {
        aviso.innerText = "Carro muito caro.";
    } else if (preco >= 130000) {
        aviso.innerText = "Preço razoável.";
    } else {
        aviso.innerText = "Excelente oportunidade!";
    }
}