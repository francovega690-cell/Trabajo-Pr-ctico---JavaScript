const nombre = "Franco";
const notas = [1, 8, 9, 9, 10];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

const promedio = suma / notas.length;

let mensaje;

if (promedio >= 7) {
  mensaje = "Muy bueno";
} else if (promedio >= 6) {
  mensaje = "Aprobado";
} else {
  mensaje = "Desaprobado";
}

console.log(`Estudiante: ${nombre}`);
console.log(`Notas: ${notas}`);
console.log(`Promedio: ${promedio.toFixed(1)}`);
console.log(`Resultado: ${mensaje}`);
