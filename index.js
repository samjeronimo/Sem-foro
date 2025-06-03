// index.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { crearSemaforo } from "./semaforo.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAc06Rp1NRMHljlmYb0TxWeITVmLB9WkQw",
  authDomain: "semaforoscl-395f3.firebaseapp.com",
  databaseURL: "https://semaforoscl-395f3-default-rtdb.firebaseio.com",
  projectId: "semaforoscl-395f3",
  storageBucket: "semaforoscl-395f3.appspot.com",
  messagingSenderId: "697041747774",
  appId: "1:697041747774:web:1ef353f40a716d835e4cf7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const estadoRef = ref(database, 'semaforo/estado'); // ✅ referencia correcta

// Crear semáforo en el DOM
const luces = crearSemaforo();

// Actualizar semáforo con texto ("rojo", "amarillo", "verde")
function actualizarSemaforo(color) {
  luces.rojo.className = "circulo";
  luces.amarillo.className = "circulo";
  luces.verde.className = "circulo";

  if (color === "rojo") luces.rojo.classList.add("activo-rojo");
  else if (color === "amarillo") luces.amarillo.classList.add("activo-amarillo");
  else if (color === "verde") luces.verde.classList.add("activo-verde");
}


// ✅ Escuchar cambios correctamente
onValue(estadoRef, (snapshot) => {
  const valor = snapshot.val(); // ahora sí está definido
  console.log("✅ Valor desde Firebase:", valor);
  actualizarSemaforo(valor); // ya no uses parseInt, es texto
});
