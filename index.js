import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, set, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { crearSemaforo } from "./semaforo.js";

// 🔧 Configuración de Firebase
const firebaseConfig = {
  // Clave pública que permite a tu app comunicarse con Firebase (no es privada)
  apiKey: "AIzaSyAc06Rp1NRMHljlmYb0TxWeITVmLB9WkQw",
  // Dominio usado por Firebase Authentication y Hosting
  authDomain: "semaforoscl-395f3.firebaseapp.com",
  // URL de la base de datos en tiempo real (Realtime Database)
  databaseURL: "https://semaforoscl-395f3-default-rtdb.firebaseio.com",
  // ID único de tu proyecto en Firebase
  projectId: "semaforoscl-395f3",
  // Dirección del bucket de Firebase Storage (para archivos)
  storageBucket: "semaforoscl-395f3.appspot.com",
  // ID del remitente para servicios como notificaciones push
  messagingSenderId: "697041747774",
  // ID único de tu app registrada en Firebase
  appId: "1:697041747774:web:1ef353f40a716d835e4cf7"
};

// 🚀 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const estadoRef = ref(database, 'semaforo/estado');

// 🧠 Crear semáforo en pantalla (luces y botones)
const luces = crearSemaforo();

// ⬅️ Estado local actual (para evitar escrituras duplicadas)
let estadoActual = "";

function actualizarSemaforo(color) {
  luces.rojo.className = "circulo";
  luces.amarillo.className = "circulo";
  luces.verde.className = "circulo";

  if (color === "rojo") luces.rojo.classList.add("activo-rojo");
  else if (color === "amarillo") luces.amarillo.classList.add("activo-amarillo");
  else if (color === "verde") luces.verde.classList.add("activo-verde");

  // No aplicar nada por defecto para "automatico"
}


const colorActualRef = ref(database, 'semaforo/colorActual');

onValue(colorActualRef, (snapshot) => {
  const colorActual = snapshot.val();
  // Solo actualizar semáforo con colorActual si el estado es automático
  if (estadoActual === "automatico" && colorActual) {
    actualizarSemaforo(colorActual);
    console.log("🔄 Color actual automático:", colorActual);
  }
});



// ⬆️ Cambiar estado en Firebase si es diferente al actual
function cambiarEstado(nuevoEstado) {
  if (nuevoEstado !== estadoActual) {
    set(estadoRef, nuevoEstado);
    estadoActual = nuevoEstado;           // <- Actualizas localmente
    actualizarSemaforo(nuevoEstado);     // <- Actualizas interfaz inmediatamente
  }
}


//Eventos de botones para cambiar estado del semáforo
luces.btn_red.addEventListener('click', () => cambiarEstado("rojo"));
luces.btn_yellow.addEventListener('click', () => cambiarEstado("amarillo"));
luces.btn_green.addEventListener('click', () => cambiarEstado("verde"));
luces.btn_off.addEventListener('click', () => cambiarEstado("apagado"));

let modoAutomaticoActivo = false;

async function iniciarModoAutomatico() {
  cambiarEstado("automatico"); //Esto activa el modo automático en la Raspberry
  modoAutomaticoActivo = true;
  luces.btn_auto.textContent = "Detener Automático";
}


function detenerModoAutomatico() {
  cambiarEstado("apagado");
  modoAutomaticoActivo = false;
  luces.btn_auto.textContent = "Automático";
}


function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Botón automático
luces.btn_auto.addEventListener('click', () => {
  if (!modoAutomaticoActivo) {
    iniciarModoAutomatico();
  } else {
    detenerModoAutomatico();
  }
});



//Inicializar valor si no existe en la base
get(estadoRef).then(snapshot => {
  if (!snapshot.exists()) {
    set(estadoRef, "apagado");
  } else {
    estadoActual = snapshot.val();
    actualizarSemaforo(estadoActual);
  }
});
