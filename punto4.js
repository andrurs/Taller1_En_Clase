const prompt = require('prompt-sync')()
function menu(){
    console.log("◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙ MENU ◙◙◙◙◙◙◙◙◙◙◙◙◙◙◙")
    console.log("SELECCIONE UNA OPCIÓN")
    console.log("1. Sumar")
    console.log("2. Restar")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Raíz Cuadrada")
    console.log("6. Salir")
}

function sumar(a,b){
    return a+b
}

function restar(a,b){
    return a-b
}

function multiplicacion(a,b){
    return a*b
}
function dividir(a,b){
    if (b===0){
        return "ERROR: No se puede dividir por cero."
    }
    return a/b
}

function raiz(a){
    if (a<0){
        return "ERROR: No se puede calcualr Raiz de un negativo"
    }
    return Math.sqrt(a)
}

let opcion;
do{
    menu()
    opcion = parseInt(prompt("Ingrese el un numero de acuerdo a lo que desea hacer:"))

    switch (opcion){
    
        case 1:{
            const num1 = parseFloat(prompt("Ingrese el primer número: "))
            const num2 = parseFloat(prompt("Ingrese el segundo número: "))
            console.log(`La suma de ${num1} + ${num2} es ${sumar(num1, num2)}`)
            break
            }
        case 1:{
            const num1 = parseFloat(prompt("Ingrese el primer número: "))
            const num2 = parseFloat(prompt("Ingrese el segundo número: "))
            console.log(`La suma de ${num1} + ${num2} es ${sumar(num1, num2)}`)
            break
        }
        case 2:{
            const num1 = parseFloat(prompt("Ingrese el primer número: "))
            const num2 = parseFloat(prompt("Ingrese el segundo número: "))
            console.log(`La resta de ${num1} - ${num2} es ${restar(num1, num2)}`)
            break
        }
        case 3:{
            const num1 = parseFloat(prompt("Ingrese el primer número: "))
            const num2 = parseFloat(prompt("Ingrese el segundo número: "))
            console.log(`La multiplicación de ${num1} * ${num2} es ${multiplicacion(num1, num2)}`)
            break
        }
        case 4:{
            const num1 = parseFloat(prompt("Ingrese el primer número: "))
            const num2 = parseFloat(prompt("Ingrese el segundo número: "))
            console.log(`La división de ${num1} - ${num2} es ${dividir(num1, num2)}`)
            break  
        }          
        case 5:{
            const num = parseFloat(prompt("Ingrese un número para calculas la raíz cuadrada: "))
            console.log(`La Raíz Cuadrada de ${num} es ${raiz(num)}`)
            break  
        }    
        case 6: {
            console.log("Saliendo del Programa...")
            break

        }    
        default:{
            console.log("Dato no valido valida. Entente nuevamente." )
            }     
    }
}while (opcion !==6)

