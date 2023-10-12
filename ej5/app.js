const receta1 = "patatas fritas, patatas pero cortadas y fritas"
const receta2 = "filete, filete pasado por la sartén"
const receta3 = "hamburguesa, hamburguesa pasada por la sartén"
const receta4 = "huevo frito, huevo frito en la sarten"

var listaRecetas = [receta1, receta2, receta3, receta4]

var nuevoOl = document.createElement('ol')
var div = document.getElementById("div")
div.appendChild(nuevoOl)

listaRecetas.forEach(receta => {
    var recetaLi = document.createElement('li')
    recetaLi.textContent = receta
    recetaLi.id = listaRecetas.indexOf(receta)+1
    nuevoOl.appendChild(recetaLi)
})

function eliminar() {
    var recetaEliminar = parseInt(document.getElementById("input").value)
    var recetaBorrar = document.getElementById(recetaEliminar)
    recetaBorrar.remove()

}