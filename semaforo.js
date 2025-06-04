import { cargarHeader } from "./header/header.js";

// semaforo.js
export function crearSemaforo() {

  let body = document.querySelector('#root');
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

  semaforo.appendChild(rojo);
  semaforo.appendChild(amarillo);
  semaforo.appendChild(verde);
  contenedor.appendChild(semaforo);
  
  body.appendChild(contenedor);

  let btn_red = document.createElement('button');
  btn_red.className = "btn-rojo";
  btn_red.textContent = "Rojo";
  body.appendChild(btn_red);

  let btn_yellow = document.createElement('button');
  btn_yellow.className = "btn-yellow";
  btn_yellow.textContent = "Amarillo";
  body.appendChild(btn_yellow);

  let btn_green = document.createElement('button');
  btn_green.className = "btn_green";
  btn_green.textContent = "Verde";
  body.appendChild(btn_green);
  

  return { rojo, amarillo, verde };
}
