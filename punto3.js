const prompt = require('prompt-sync')()
const edad = parseFloat(prompt('Ingrese su edad: '))

if (edad>=0){
if (edad>=0 && edad <10){
    console.log("Es niño")
}else if (edad>=10 && edad<18){
    console.log("Es adolecente")
}else if (edad>=18 && edad<=40){
    console.log("Es Adulto")
}else if (edad>40 && edad<=60){
    console.log("Es adulto mayor")

}else if(edad>60){
    console.log("Es abuelo")
}}else console.log ("El dato no corresponde a una edad")