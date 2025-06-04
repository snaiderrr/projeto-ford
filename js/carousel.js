let count = 1;
document.getElementById("radio1").checked = true;

let intervalId;

// Array de objetos para armazenar o texto e o link de cada slide
const carouselData = [
    {
        text: "Essa é a nova Ford Ranger 2022. Verifique as Novidades.",
        link: "lancamento.html"
    },
    {
        text: "Confira aqui. Design e tecnologia que impressionam.",
        link: "https://www.ford.com.br/suvs/territory/"
    },
    {
        text: "Galeria Ford Ranger: Descubra Cada Detalhe",
        link: "https://www.ford.com.br/carros/mustang-mach-e/"
    }
];

// Função para atualizar o texto e o link
function updateCarouselTitle(index) {
    const carouselTitleDiv = document.getElementById("carousel-title");
    if (carouselTitleDiv) {
        const data = carouselData[index - 1];
        if (data) {
            carouselTitleDiv.innerHTML = `<a href="${data.link}" style="text-decoration: none; color: inherit;">${data.text}</a>`;
        }
    }
}

function nextImage() {
    count++;
    if (count > carouselData.length) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
    updateCarouselTitle(count); // Atualiza o texto e link junto com a imagem
}

function startAutoSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        nextImage();
    }, 5000); // 5 segundos para a alternância automática
}


updateCarouselTitle(count);
startAutoSlide(); 


const radioButtons = document.querySelectorAll('input[name="radio-btn"]');


radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedRadioId = radio.id;
        const selectedImageIndex = parseInt(selectedRadioId.replace('radio', ''));

        count = selectedImageIndex;

        updateCarouselTitle(count);

        startAutoSlide();
    });
});