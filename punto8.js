const prompt = require('prompt-sync')()

// Clase Persona
class Persona {
    constructor(nombres, apellidos, genero, fechaNacimiento, salario) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.genero = genero
        this.fechaNacimiento = new Date(fechaNacimiento)
        this.salario = salario
    }

    // Método para calcular la edad
    calcularEdad() {
        const hoy = new Date()
        const diferencia = hoy - this.fechaNacimiento
        return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25)) // Años con decimales para precisión
    }

    // Método para verificar mayoría de edad
    esMayorDeEdad() {
        return this.calcularEdad() >= 18
    }

    // Método para aumentar el salario
    aumentarSalario(porcentaje) {
        this.salario += this.salario * (porcentaje / 100)
    }

    // Método para mostrar información de la persona
    mostrarInformacion() {
        console.log("\nInformación de la persona:")
        console.log(`- Nombres: ${this.nombres}`)
        console.log(`- Apellidos: ${this.apellidos}`)
        console.log(`- Género: ${this.genero}`)
        console.log(`- Fecha de nacimiento: ${this.fechaNacimiento.toLocaleDateString()}`)
        console.log(`- Edad: ${this.calcularEdad()} años`)
        console.log(`- Salario: $${this.salario.toFixed(2)}`)
        console.log(`- ¿Es mayor de edad?: ${this.esMayorDeEdad() ? "Sí" : "No"}`)
    }
}

// Función para crear una persona
function crearPersona() {
    console.log("\nIngrese los datos de la persona:")
    const nombres = prompt("Nombres: ")
    const apellidos = prompt("Apellidos: ")
    const genero = prompt("Género: ")
    const fechaNacimiento = prompt("Fecha de nacimiento (YYYY-MM-DD): ")
    const salario = parseFloat(prompt("Salario: "))

    return new Persona(nombres, apellidos, genero, fechaNacimiento, salario)
}

// Función para modificar una persona
function modificarPersona(persona) {
    console.log("\nModificar persona:")
    persona.nombres = prompt(`Nombres (actual: ${persona.nombres}): `) || persona.nombres
    persona.apellidos = prompt(`Apellidos (actual: ${persona.apellidos}): `) || persona.apellidos
    persona.genero = prompt(`Género (actual: ${persona.genero}): `) || persona.genero
    const nuevaFecha = prompt(`Fecha de nacimiento (actual: ${persona.fechaNacimiento.toLocaleDateString()}): `)
    if (nuevaFecha) persona.fechaNacimiento = new Date(nuevaFecha)
    const nuevoSalario = parseFloat(prompt(`Salario (actual: ${persona.salario}): `))
    if (!isNaN(nuevoSalario)) persona.salario = nuevoSalario
}

// Función para aumentar el salario
function aumentarSalario(persona) {
    const porcentaje = parseFloat(prompt("Ingrese el porcentaje de aumento: "))
    if (!isNaN(porcentaje)) {
        persona.aumentarSalario(porcentaje)
        console.log(`Nuevo salario: $${persona.salario.toFixed(2)}`)
    } else {
        console.log("Porcentaje no válido.")
    }
}

// Menú de opciones
function mostrarMenu() {
    console.log("\nMenú de opciones:")
    console.log("a. Consultar persona")
    console.log("b. Modificar persona")
    console.log("c. Aumentar salario")
    console.log("d. Verificar mayoría de edad")
    console.log("e. Salir")
}

// Programa principal
let persona = crearPersona()
let opcion

do {
    mostrarMenu()
    opcion = prompt("Seleccione una opción: ").toLowerCase()

    switch (opcion) {
        case 'a':
            persona.mostrarInformacion()
            break
        case 'b':
            modificarPersona(persona)
            break
        case 'c':
            aumentarSalario(persona)
            break
        case 'd':
            console.log(`¿Es mayor de edad?: ${persona.esMayorDeEdad() ? "Sí" : "No"}`)
            break
        case 'e':
            console.log("Saliendo del programa...")
            break
        default:
            console.log("Opción no válida. Intente nuevamente.")
    }
} while (opcion !== 'e')