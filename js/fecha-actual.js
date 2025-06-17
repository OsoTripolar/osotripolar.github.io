const yearTag = document.getElementById("year")

// Obtenemos Año Actual
const fechaActual = new Date();
const actualYear = fechaActual.getFullYear();

// Cambiamos el año
yearTag.textContent=actualYear