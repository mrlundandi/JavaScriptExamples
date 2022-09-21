const myName = "Samuel"
const lastname = "Lundandi"
const student = myName.concat(" ").concat(lastname)

const studentMayus = student.toUpperCase()

const studentMinus = student.toLowerCase()

const studentLength = student.length

const firstName = myName.substring(0, 1)

const finalLastname = lastname.substring(lastname.length - 1, lastname.length)

const studentNoSpaces = student.replace(/ /g, "")

const nameInStudent = student.includes(myName)

console.log(student,'\n', studentMayus,'\n', studentMinus,'\n', studentLength,'\n', firstName,'\n', finalLastname,'\n',
studentNoSpaces,'\n', nameInStudent)

/*Crea un archivo JS que contenga las siguientes línea
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/