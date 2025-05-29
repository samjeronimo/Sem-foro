import { crearSemaforo } from "./semaforo.js";

// Crear semáforo y obtener referencias
const luces = crearSemaforo();

// Función para encender una luz
function actualizarSemaforo(valor) {
  luces.rojo.style.backgroundColor = "gray";
  luces.amarillo.style.backgroundColor = "gray";
  luces.verde.style.backgroundColor = "gray";

  if (valor === 1) {
    luces.rojo.style.backgroundColor = "red";
  } else if (valor === 2) {
    luces.amarillo.style.backgroundColor = "yellow";
  } else if (valor === 3) {
    luces.verde.style.backgroundColor = "green";
  }
}

// Función para consultar ThingSpeak
async function leerThingSpeak() {
  const channelID = "TU_CHANNEL_ID";  // <-- CAMBIA ESTO
  const apiKey = "TU_API_KEY";        // <-- CAMBIA ESTO si es necesario

  try {
    const res = await fetch(`https://api.thingspeak.com/channels/${channelID}/fields/1/last.json?api_key=${apiKey}`);
    const data = await res.json();
    const valor = parseInt(data.field1);
    console.log("Valor recibido:", valor);
    actualizarSemaforo(valor);
  } catch (e) {
    console.error("Error al consultar ThingSpeak:", e);
  }
}

// Llamar cada 5 segundos
setInterval(leerThingSpeak, 5000);
