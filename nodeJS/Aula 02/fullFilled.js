/**
 * Aula 02 - Promise FullFilled
 */

function calculoRapido(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
}

calculoRapido(10).then((resultado) => {
    console.log(resultado);
})

console.log('Waiting...')