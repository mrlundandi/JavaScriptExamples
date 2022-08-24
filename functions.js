function myFunction() {
return true;
} 
if (myFunction() === true) {
console.log("La función devuelve True");
}

async function myPromise() {
return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
const asFunc = myPromise();

console.log(asFunc)

function* myGenerator() {
let id = 0
while(true) {
yield id += 2
}
}
const genId = myGenerator();

console.log(genId.next())
console.log(genId.next())

//Crea un archivo JS que contenga las siguientes líneas
// Una función sin parámetros que devuelva siempre "true"
// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// Una función generadora de índices pares automáticos