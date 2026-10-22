let notas = [8, 6, 9, 4, 7];

notas.forEach(nota => console.log(nota));

let aprovadas = notas.filter(nota => nota >= 7);
let extras = notas.map(nota => Math.min(nota + 1, 10));
let media = notas.reduce((a, b) => a + b) / notas.length;
let baixa = notas.some(nota => nota < 5);

console.log("Aprovadas:", aprovadas);
console.log("Com extra:", extras);
console.log("Média:", media);
console.log("Nota abaixo de 5:", baixa);