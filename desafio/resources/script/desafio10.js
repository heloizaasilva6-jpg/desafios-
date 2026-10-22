let notas = [2, 1, 1, 4, 1, 1];
let notasValidas = notas.every(nota => nota >= 0 && nota <= 10);


if (notasValidas) {
    console.log("Todas as notas são válidas!");
} else {

    console.log("Existem notas fora do intervalo permitido.");
}