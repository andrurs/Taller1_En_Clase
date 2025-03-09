const prompt = require('prompt-sync')()
const edad = parseFloat(prompt('Ingrese su edad: '))

if (edad>=0){
if (edad>=18 ){
    console.log("Es mayor de edad")
}else
    console.log("Es menor de edad")
}else console.log ("El dato no corresponde a una edad")