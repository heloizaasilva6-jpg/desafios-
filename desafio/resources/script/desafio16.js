let valores = [45, 30, 80, 25, 50];

let total = valores.reduce((a, b) => a + b, 0);

console.log("Total da compra: R$", total);

if (total > 200) {
    console.log("O cliente pode receber um brinde!");
} else {
    console.log("Não tem brinde.");
}
