function addTeam() {
    var equipo = document.getElementById("input1").value
    equipo = equipo.charAt(0).toUpperCase() + equipo.slice(1)
    var puntos = parseInt(document.getElementById("input2").value)

    var tabla = document.getElementById("tabla")


    // Sacar datos tabla al diccionario
    var ordenar = {}
    const filas = tabla.getElementsByTagName("tr")
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName("td")
      
        for (let j = 0; j < celdas.length; j++) {
            if ( j === 1 ) {
                ordenar[celdas[j].textContent] = celdas[j+1].textContent
            }
        }
    }


    // Añadir al diccionario los nuevos datos
    ordenar[equipo] = puntos


    // Ordenar diccionario
    const ordenado = Object.entries(ordenar).sort(([,a], [,b]) => b-a).reduce((r, [k, v]) => ({...r, [k]: v }), {})

    // Borrar tabla antigua
    for (let i = 0; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName("td")
        tabla.remove(celdas)
    }


    // Crear tabla nueva
    var nuevaTabla = document.createElement("table")
    nuevaTabla.id = "tabla"

    var nuevaFila = document.createElement("tr")
    
    var nuevaPosicion = document.createElement("th")
    nuevaPosicion.textContent = "Posición"
    var nuevoEquipo = document.createElement("th")
    nuevoEquipo.textContent = "Equipo"
    var nuevoPuntos = document.createElement("th")
    nuevoPuntos.textContent = "Puntos"
    
    nuevaFila.appendChild(nuevaPosicion)
    nuevaFila.appendChild(nuevoEquipo)
    nuevaFila.appendChild(nuevoPuntos)
    
    nuevaTabla.appendChild(nuevaFila)
    
    var div = document.getElementById("div")
    div.appendChild(nuevaTabla)
    

    // Mostramos nuevos datos
    const cantidadClaves = Object.keys(ordenado).length;
    for (var i = 0; i < cantidadClaves; i++) {
        const nuevotr = nuevaTabla.insertRow(i+1)
        
        const clavesOrdenado = Object.keys(ordenado)
    

        const tdPosicion = nuevotr.insertCell(0)
        tdPosicion.textContent = i+1
        const tdEquipo = nuevotr.insertCell(1)
        tdEquipo.textContent = clavesOrdenado[i]
        const tdPuntos = nuevotr.insertCell(2)
        tdPuntos.textContent = ordenado[clavesOrdenado[i]]
    }
}