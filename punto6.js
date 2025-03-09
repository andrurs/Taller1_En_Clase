const prompt = require('prompt-sync')();

var suma = 0;

while (suma < 50) {
    const valorIngreso = parseFloat(prompt("Ingrese un número: "));

    if (isNaN(valorIngreso)) {
        console.log("Por favor, ingrese un número válido.");
        continue; // Si no es un número, vuelve a pedir la entrada.
    }

    suma += valorIngreso; // Suma el número ingresado a la suma total.
    console.log(`Suma actual: ${suma}`);
}

console.log(`La suma total es (${suma}), ya mayor o igual a 50`);