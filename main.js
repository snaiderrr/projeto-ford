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