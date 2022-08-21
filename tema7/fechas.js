const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(1990, 1, 2, 12, 25)
console.log(fecha2)

const comparacion = fecha > fecha2
console.log(comparacion)

console.log(fecha2.getDate())
console.log(fecha2.getMonth() + 1) 
console.log(fecha2.getFullYear())

// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// La fecha de hoy
// La fecha de tu nacimiento
// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// Una variable que contenga el día de tu nacimiento
// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// Una variable que contenga el año de tu nacimiento (con 4 dígitos)