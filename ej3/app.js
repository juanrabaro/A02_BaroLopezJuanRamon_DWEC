function numeroSemana(input) {
    const fecha = document.getElementById("input").value

    const separado = fecha.split("-")

    const day = parseInt(separado[2])
    const month = parseInt(separado[1])
    const year = parseInt(separado[0])
    
    const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var contadorDias = 0
    for (var i = 0; i < month - 1; i++) {
        contadorDias += meses[i]
    }
    
    contadorDias += day

    var resultfecha = document.getElementById("result")
    resultfecha.textContent = "Semana número: " + Math.floor(contadorDias/7)
}

