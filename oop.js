class Student {
    name = "Samuel"
    subjects = ["Javascript", "HTML", "CSS"]

    getData(){
        return{
            name: this.name,
            subjects: this.subjects
        }
    }
}
const student1 = new Student()

console.log(student1.getData())

//Crea un nuevo fichero JS que contenga las siguientes líneas
// Una clase llamada "Estudiante" que tenga:
// Una variable llamada nombre
// Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// Crea una nueva instancia de "Estudiante"
// Haz la llamada al método obtenDatos