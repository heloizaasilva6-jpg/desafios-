
// Criando uma array de tarfas de um estudante um estudante.

// 1. Comece com 5 tarefas (Código inicial)
let tarefas = [
  "Estudar HTML",
  "Estudar CSS",
  "Praticar JavaScript",
  "Estudar Laravel",
  "Revisar conteúdo"
];

// Exiba a lista antes das alterações
console.log("--- Lista Inicial de Tarefas ---");
console.log(tarefas);
console.log("\n--------------------------------\n");

// 2. Remova uma tarefa utilizando splice()
// Vamos remover "Estudar Laravel" (índice 3)
tarefas.splice(3, 1); 

tarefas.push("descansar")
console.log(tarefas)