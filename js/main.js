let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}

function comparar () {
    let modelo = "XLS";
    let resultado = document.getElementById("resultado");

    switch (modelo) {
        case "Storm":
            resultado.innerText = "Modelo completo com todos os opcionais.";
            break;
        case "XLS":
            resultado.innerText = "Modelo intermediário com bom custo-benefício.";
            break;
        case "XL":
            resultado.innerText = "Modelo básico, ideal para cidade."; 
            break;
          default:
            resultado.innerText = "Modelo não reconhecido.";     
    }
}

function avaliar(){
    let preco = 145000;
    let aviso = document.getElementById("aviso");

    if (preco >= 150000) {
        aviso.innerText = "Carro muito caro.";
    } else if (preco >= 130000) {
        aviso.innerText = "Preço razoável.";
    } else {
        aviso.innerText = "Excelente oportunidade!";
    }
}

function avaliar(){
    let km = document.getElementById("km").value;
    let msg = document.getElementById("msg");

    if (km > 15) {
        msg.innerText = "Carro econômico!";
    } else if (km >= 10) {
        msg.innerText = "Consumo razoável.";
    } else {
        msg.innerText = "Bebe muito!";
    }
}