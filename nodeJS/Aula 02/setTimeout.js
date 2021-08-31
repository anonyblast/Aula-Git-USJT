/**
 * Aula 02 - Fila setTimeout
 */

function demorada(tempo) {
    console.log(`demorada ${tempo}`);
    const atualMaisTempo = new Date().getTime() + tempo;
    while (new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4;
    return d;
}

setTimeout(function() {
    demorada(2000);
}, 2000);
setTimeout(function() {
    demorada(1000);
}, 1000);
console.log("Final do script");