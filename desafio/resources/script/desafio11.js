let saldo = 500;
let saque = Number(prompt("Digite o valor do saque"));


if (saque > 0 && saque <= saldo) {
    saldo = saldo - saque;
    alert("Saque realizado");
} else {

    alert("Saque inválido");
}

alert("Saldo final R$"+ saldo);

