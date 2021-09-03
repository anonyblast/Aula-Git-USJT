/***
 * Aula 03 - Funções Assíncronas
 */

// async function hello(name) {
//     return `Oi ${name}`;
// }

// const welcome = hello('Gustavo');
// console.log(welcome);
// welcome.then((res) => console.log(res));

function factorial(n) {
    if (n < 0) return 'Please, only positive numbers';

    multiplied = n - 1;
    res = parseInt(n);
    for (let i = multiplied; i > 1; i--) {
        res *= i;
    }
    return Promise.resolve(res);
}

async function callWithAwait() {
    const f1 = await factorial(3);
    console.log(f1)
    const f2 = await factorial(-1);
    console.log(f2)
}

callWithAwait();