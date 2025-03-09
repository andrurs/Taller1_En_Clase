const prompt = require('prompt-sync')();

let valores = []
var suma = 0

// Solicito 10 valores por consola al usuario
for (let i = 0; i < 10; i++) {
    const valor = parseFloat(prompt(`Ingrese el valor ${i + 1}: `))

    //con isNAN me aseguro que el dato ingresado corresponda a un numero valido
    if (isNaN(valor)) {
        console.log("Por favor, ingrese un número válido.")
        i--; // Este es para repetir la iteración si el valor no es válido.
        continue//Repetimos la solicitud actual 
    }

    valores.push(valor) // Almaceno el valor en el arreglo.
    suma += valor // Sumo el valor al total.
}

// Calcular el valor mayor, menor y el promedio
const valorMayor = Math.max(...valores)
const valorMenor = Math.min(...valores)
const promedio = suma / valores.length

// Mostrar los resultados
console.log(`\n◙◙◙◙◙◙ Resultados:◙◙◙◙◙◙◙`)
console.log(`→ Suma total: ${suma}`)
console.log(`→ Valor mayor: ${valorMayor}`)
console.log(`→ Valor menor: ${valorMenor}`)
console.log(`→ Promedio: ${promedio.toFixed(2)}`)