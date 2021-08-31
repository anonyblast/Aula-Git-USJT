/**
 * Aula 2 - Conceito de Fila
 */

setTimeout(function() {
    console.log("Dentro da timeout", 0);
});

const a = new Date().getTime() + 1000;

while (new Date().getTime() <= a);
console.log("Fora da timeout");