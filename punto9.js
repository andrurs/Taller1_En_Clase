const prompt = require('prompt-sync')()

// Clase Vehículo
class Vehiculo {
    constructor(placa, color, marca, modelo, kilometraje = 0, velocidad = 0) {
        this.placa = placa
        this.color = color
        this.marca = marca
        this.modelo = modelo
        this.kilometraje = kilometraje
        this.velocidad = velocidad
        this.encendido = false // Estado inicial: apagado
    }

    // Método para prender el vehículo
    prender() {
        if (this.encendido) {
            console.log("El vehículo ya está encendido.")
        } else {
            this.encendido = true
            console.log("\nInformación del vehículo:")
            console.log(`- Placa: ${this.placa}`)
            console.log(`- Color: ${this.color}`)
            console.log(`- Marca: ${this.marca}`)
            console.log(`- Modelo: ${this.modelo}`)
            console.log(`- Kilometraje: ${this.kilometraje} km`)
            console.log(`- Velocidad: ${this.velocidad} km/h`)
            console.log("El vehículo ha sido prendido.")
        }
    }

    // Método para apagar el vehículo
    apagar() {
        if (!this.encendido) {
            console.log("El vehículo ya está apagado.")
        } else {
            this.encendido = false
            this.velocidad = 0 // La velocidad se reinicia al apagar
            console.log("\nCondiciones finales del vehículo:")
            console.log(`- Kilometraje: ${this.kilometraje} km`)
            console.log(`- Velocidad: ${this.velocidad} km/h`)
            console.log("El vehículo ha sido apagado.")
        }
    }

    // Método para acelerar el vehículo
    acelerar() {
        if (!this.encendido) {
            console.log("No se puede acelerar. El vehículo está apagado.")
        } else if (this.velocidad >= 100) {
            console.log("El vehículo ya ha alcanzado la velocidad máxima (100 km/h).")
        } else {
            this.velocidad += 10 // Aumenta la velocidad en 10 km/h
            this.kilometraje += 10 // Aumenta el kilometraje en 10 km
            console.log(`Acelerando... Velocidad actual: ${this.velocidad} km/h`)
        }
    }
}

// Función para crear un vehículo
function crearVehiculo() {
    console.log("\nIngrese los datos del vehículo:")
    const placa = prompt("Placa: ")
    const color = prompt("Color: ")
    const marca = prompt("Marca: ")
    const modelo = prompt("Modelo: ")
    return new Vehiculo(placa, color, marca, modelo)
}

// Menú de opciones
function mostrarMenu() {
    console.log("\nMenú de opciones:")
    console.log("1. Prender vehículo")
    console.log("2. Acelerar")
    console.log("3. Apagar vehículo")
    console.log("4. Salir")
}

// Programa principal
const vehiculo = crearVehiculo()
let opcion

do {
    mostrarMenu()
    opcion = prompt("Seleccione una opción: ")

    switch (opcion) {
        case '1':
            vehiculo.prender()
            break
        case '2':
            vehiculo.acelerar()
            break
        case '3':
            vehiculo.apagar()
            break
        case '4':
            console.log("Saliendo del programa...")
            break
        default:
            console.log("Opción no válida. Intente nuevamente.")
    }
} while (opcion !== '4')