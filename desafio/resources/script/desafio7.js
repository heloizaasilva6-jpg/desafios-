let notas = [8, 6, 10, 7, 12, 5]

console.log("Notas originais:", notas);

let i = 0;

while (i < notas.length) {
    if (notas[i] > 10) {
     notas.splice(i, 1);
    } else {
     i++;
}
}

notas.forEach(nota => console.log(nota))

console.log("Tem nota 10?", notas.includes(10))
console.log("Posição da nota 7:", notas.indexOf(7));

notas.splice(notas.indexOf(6), 1);
notas.sort((a, b) => a - b);

console.log("Notas finais:", notas)

