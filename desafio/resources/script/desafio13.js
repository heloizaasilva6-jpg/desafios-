let precos = [80, 35, 65, 20, 100];
let total = 0

precos.forEach((preco, indice) => {
    console.log((indice + 1) + " - R$ " + preco)
    total += preco;
})

console.log("Total: R$ " + total);