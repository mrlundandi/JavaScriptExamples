const paragraphs = document.querySelectorAll(".paragraph")
const sections = document.querySelectorAll(".section")

paragraphs.forEach(paragraph =>{
    paragraph.addEventListener("dragstart", event =>{
        console.log("I'm dragging the paragraph:" + paragraph.innerText)
        paragraph.classList.add("dragging")
        event.dataTransfer.setData("id", paragraph.id)
        const ghost_element = document.querySelector(".ghost-image")
        event.dataTransfer.setDragImage(ghost_element, 0, 0)
    })
    paragraph.addEventListener("dragend", () => {
        console.log("Finish dragging")
        paragraph.classList.remove("dragging")
    })
})
sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy for default
        console.log("Drag Over")
    })

    section.addEventListener("drop", event => {
        console.log("Drop")
        const id_paragraph = event.dataTransfer.getData("id")
        console.log("Paragraph id: ", id_paragraph)
        const paragraph = document.getElementById(id_paragraph)
        section.appendChild(paragraph)
    })
})

const paperbin = document.querySelector(".paperbin")

paperbin.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

paperbin.addEventListener("drop", event => {
    const id_paragraph = event.dataTransfer.getData("id")
    document.getElementById(id_paragraph).remove()
})




/* - Replica el ejercicio completo del vídeo
- Añade dos párrafos más en cada una de las secciones
- Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
- Añade el código necesario para que al arrastrar una sección a la papelera, ésta se elimine*/