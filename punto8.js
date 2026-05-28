for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

const promedio = suma / notas.length;
const estado = promedio >= 6 ? "Aprobado" : "Desaprobado";

console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${estado}`);
