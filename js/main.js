let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}

let carro = {
    modelo: "Storm",
    preco: 160000,
    cor: "preto"
};

console.log(carro.modelo); //Storm
console.log(carro.preco); // 160000
console.log(carro.cor); // preto


let carros = [
    { modelo: "XL 2.0 Flex", preco: 120000, cor: "preto" },
    { modelo: "XLS 2.2 Diesel", preco: 145000, cor: "preto" },
    { modelo: "Storm 2.4 Turbo", preco: 160000, cor: "preto" }
];

for (let i= 0; i < carros.length; i++) {
    console.log("Modelo:", carros[i].modelo);
    console.log("Preço:", carros[i].preco);
    console.log("Preço:", carros[i].cor);
}

class carros {
    constructor(modelo, preco, imagem) {
        this.modelo = modelo;
        this.preco = preco;
        this.imagem = imagem;
    }

    exibirInfo() {
        console.log("Modelo:", this.modelo);
        console.log("Preço: R$", this.preco);
    }
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