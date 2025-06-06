function cargarSensor() {
    let sensor = document.createElement('div');
    sensor.className = "sensor";

    let temp = document.createElement('h2');
    temp.textContent = "Temperatura: --°C";  // Valor inicial
    sensor.appendChild(temp);

    let hum = document.createElement('h2');
    hum.textContent = "Humedad: --%";       // Valor inicial
    sensor.appendChild(hum);

    let gif = document.createElement("img");
    gif.src = "https://img1.picmix.com/output/stamp/normal/7/8/5/4/1634587_5478b.gif"; 
    gif.alt = "GIF animado";
    sensor.appendChild(gif);

    return sensor;
}

export { cargarSensor }