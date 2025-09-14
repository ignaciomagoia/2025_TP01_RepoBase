// Versión final con saludo personalizado y fecha actual

function saludar() {
    console.log("Hola mundo");
}

function saludarConNombre(nombre) {
    console.log(`Hola, ${nombre}!`);
}

function obtenerFechaActual() {
    const fecha = new Date();
    console.log(`Hoy es: ${fecha.toLocaleDateString()}`);
}

// Ejecución de funciones
saludar();
saludarConNombre("Ignacio");
obtenerFechaActual();