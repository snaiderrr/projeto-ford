class Car {
    constructor(id, model, image, heightCargo, heightVehicle, groundClearance, cargoCapacity, engine, power, cargoVolume, wheels, price) {
        this.id = id;
        this.model = model;
        this.image = image;
        this.heightCargo = heightCargo;
        this.heightVehicle = heightVehicle;
        this.groundClearance = groundClearance;
        this.cargoCapacity = cargoCapacity;
        this.engine = engine;
        this.power = power;
        this.cargoVolume = cargoVolume;
        this.wheels = wheels;
        this.price = price;
    }
}


const carList = [
    new Car(1, 'XL Cabine Simples 2.2 Diesel 4x4 MT 2022', 'img/XL Cabine.jpg', '511', '1821', '232', '1340', '2.2', '160', '1240', 'Aço Estampado 16"', 'R$ 150.000'),
    new Car(2, 'XLS 2.2 Diesel 4x4 MT 2022', 'img/xls 2.2 diesel.jpg', '511', '1821', '232', '1320', '2.2', '160', '1220', 'Liga Leve 17"', 'R$ 135.000'),
    new Car(3, 'Storm 3.2 Diesel 4x4 AT 2022', 'img/storm.jpg', '511', '1821', '232', '1310', '3.2', '200', '1200', 'Liga Leve 18"', 'R$ 120.000')
];

// Array de carros para comparar
let compareList = [];

function GetCarArrPosition(car) {
    for (let i = 0; i < compareList.length; i++) {
        if (compareList[i].id === car.id) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(checkbox, carId) {
    const car = carList.find(c => c.id === carId);
    const pos = GetCarArrPosition(car);

    if (checkbox.checked) {
        if (compareList.length >= 2) {
            alert("Só é possível comparar dois veículos ao mesmo tempo.");
            checkbox.checked = false;
            return;
        }
        if (pos === -1) {
            compareList.push(car);
        }
    } else {
        if (pos !== -1) {
            compareList.splice(pos, 1);
        }
    }
}

function ShowCompare() {
    if (compareList.length < 2) {
        alert("Por favor, selecione dois veículos para comparar.");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const car = compareList[i];
        document.getElementById(`img${i + 1}`).src = car.image;
        document.getElementById(`model${i + 1}`).innerText = car.model;
        document.getElementById(`heightCargo${i + 1}`).innerText = car.heightCargo;
        document.getElementById(`heightVehicle${i + 1}`).innerText = car.heightVehicle;
        document.getElementById(`groundClearance${i + 1}`).innerText = car.groundClearance;
        document.getElementById(`cargoCapacity${i + 1}`).innerText = car.cargoCapacity;
        document.getElementById(`engine${i + 1}`).innerText = car.engine;
        document.getElementById(`power${i + 1}`).innerText = car.power;
        document.getElementById(`cargoVolume${i + 1}`).innerText = car.cargoVolume;
        document.getElementById(`wheels${i + 1}`).innerText = car.wheels;
        document.getElementById(`price${i + 1}`).innerText = car.price;
    }
}