const obj = {
nombre: "Samuel",
apellido: "Lundandi",
edad: 32,
altura: 1.86 ,
isDeveloper: true
}
const prop = "edad"
console.log(obj[prop])
console.log(obj)

const obj2 = [
    {
    nombre: "Lucía",
    apellido: "Fernández",
    edad: 27,
    altura: 1.93 ,
    isDeveloper: false,
    },{
    nombre: "Antonio",
    apellido: "Rosales",
    edad: 40,
    altura: 1.68 ,
    isDeveloper: false
}
]
const obj2orden = obj2.sort((a, b) => b.edad - a.edad)
console.log(obj2orden)


// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// Una variable que obtenga tu edad a partir del objeto anterior
// Una lista que contenga el objeto con tus datos personales 
// y un nuevo objeto con los datos personales de tus dos mejores amig@s
// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor