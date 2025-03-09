const prompt = require('prompt-sync')()
const valorFac = parseFloat(prompt('Ingrese el valor de la factura: '))
const ValconImpuesto= valorFac*0.15
var valorTot=0
if (valorFac > 50000) {
    valorTot= ValconImpuesto+valorFac
    console.log(`El valor total Con el 15% de impuesto es de: ${valorTot}`)
}else {
    console.log(`El valor de la factura es de: ${valorFac} y no aplica impuesto`)
}