const array1 = ["pan", "leche", "queso", "pasta", "agua"];
array1.push("Aceite de Girasol");
console.log(array1);
var newArray1 = array1.slice(0, 5);
console.log(newArray1);

const listaPeliculas = [
    {titulo:"El Señor de los Anillos", director:"Peter Jackson",fecha: new Date (2001, 11, 19) },
    {titulo:"Django: Desencadenado", director:"Quentin Tarantino",fecha: new Date (2012, 11, 25) },
    {titulo:"Spider-Man 2", director:"Sam Raimi",fecha: new Date (2004, 6, 14) }
]
const listaPeliculas1 = listaPeliculas.filter(listaPeliculas => listaPeliculas.fecha > new Date (2010, 0, 1));
console.log(listaPeliculas1);

const directores = listaPeliculas.map(listaPeliculas => {
    return listaPeliculas.director});
console.log(directores);

const titulos = listaPeliculas.map(listaPeliculas => {
    return listaPeliculas.titulo});
console.log(titulos);

const directores_titulos = directores.concat(titulos)
console.log(directores_titulos);

const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop);