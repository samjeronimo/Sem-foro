import { cargarSensor } from "./sensor/sensor.js";
import { cargarHeader } from "./header/header.js";

export function crearSemaforo() {
  const body = document.querySelector('#root');
  body.className = "body";

  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-semaforo";

  const semaforo = document.createElement("div");
  semaforo.className = "semaforo";

  const rojo = document.createElement("div");
  rojo.className = "circulo";
  rojo.id = "rojo";

  const amarillo = document.createElement("div");
  amarillo.className = "circulo";
  amarillo.id = "amarillo";

  const verde = document.createElement("div");
  verde.className = "circulo";
  verde.id = "verde";

  // Agregar luces al semáforo
  semaforo.appendChild(rojo);
  semaforo.appendChild(amarillo);
  semaforo.appendChild(verde);
  contenedor.appendChild(semaforo);
  body.appendChild(contenedor);
  body.appendChild(cargarSensor());
  body.appendChild(cargarHeader());

  const btn_red = document.createElement('button');
  btn_red.className = "btn-rojo";
  btn_red.textContent = "Rojo";
  body.appendChild(btn_red);

  const btn_yellow = document.createElement('button');
  btn_yellow.className = "btn-yellow";
  btn_yellow.textContent = "Amarillo";
  body.appendChild(btn_yellow);

  const btn_green = document.createElement('button');
  btn_green.className = "btn_green";
  btn_green.textContent = "Verde";
  body.appendChild(btn_green);

  const btn_off = document.createElement('button');
  btn_off.className = "btn-apagar";
  btn_off.textContent = "Apagar";
  body.appendChild(btn_off);

  const btn_auto = document.createElement('button');
  btn_auto.className = "btn-automatico";
  btn_auto.textContent = "Automático";
  body.appendChild(btn_auto);


  return { rojo, amarillo, verde, btn_red, btn_yellow, btn_green, btn_off, btn_auto};
}
