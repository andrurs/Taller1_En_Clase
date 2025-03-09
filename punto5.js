const prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingresa el valor de n para la serie Fibonacci: '));

let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`La serie Fibonacci hasta el término ${n} es: ${fibonacci.join(', ')}`);