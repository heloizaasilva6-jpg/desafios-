let texto = "JavaScript e divertido";
let vogais = "aeiou";
let contador = 0;

texto = texto.toLowerCase();

for (let letra of texto) {
    if (vogais.includes(letra)) {
        contador++;
    }
}

console.log("Quantidade de vogais:", contador);