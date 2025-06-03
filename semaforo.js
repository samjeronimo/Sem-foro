// semaforo.js
export function crearSemaforo() {
  const contenedor = document.createElement("div");
  contenedor.id = "contenedor-semaforo";

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
  document.getElementById("root").appendChild(contenedor);

  return { rojo, amarillo, verde };
}
