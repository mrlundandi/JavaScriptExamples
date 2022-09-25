const myName = "Samuel"
const lastname ="Lundandi"
const student = myName.concat(" ").concat(lastname)

const studentMayus = student.toUpperCase()
const studentMinus = student.toLowerCase()

const studentLength = student.length

const firstName = myName.substring(0, 1)

const finalLastname = lastname.substring(lastname.length - 1, lastname.length)

const studentNoSpaces = student.replace(/ /g, "")

const nameInStudent = student.includes(myName)

console.log(student,"\n", studentMayus,"\n", studentMinus,"\n", studentLength,"\n", firstName,"\n", finalLastname,"\n",studentNoSpaces,"\n", nameInStudent)

/*Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal*/