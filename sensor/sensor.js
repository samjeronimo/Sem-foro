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
    gif.id = "ventilador-img";  // 🔑 ID para poder modificar luego
    gif.src = "https://groupesebcol.vtexassets.com/arquivos/ids/160237/7702073345103-1.jpg?v=637866627976300000";  // Ruta local a tu imagen PNG
    gif.alt = "Ventilador estático";
    sensor.appendChild(gif);

    return sensor;
}

export { cargarSensor }