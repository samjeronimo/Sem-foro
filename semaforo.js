function crearSemaforo() {
    // Crear contenedor principal
    const contenedor = document.createElement("div");
    contenedor.id = "contenedor-semaforo";
  
    // Crear estructura del semáforo
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
  
    // Agregar círculos al semáforo
    semaforo.appendChild(rojo);
    semaforo.appendChild(amarillo);
    semaforo.appendChild(verde);
  
    // Agregar semáforo al contenedor
    contenedor.appendChild(semaforo);
  
    // Agregar contenedor al body
    document.body.appendChild(contenedor);
  
    // Devolver referencias
    return {
      rojo,
      amarillo,
      verde
    };
  }
  
  export { crearSemaforo };
  