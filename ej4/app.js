function reloj(){
    const fechaActual = new Date()
    var horaActual = fechaActual.getHours()
    var minutosActuales = fechaActual.getMinutes()
    var segundosActuales = fechaActual.getSeconds()

    horaActual = horaActual.toString()
    if ( horaActual.length === 1 ) {
        horaActual = "0"+horaActual
    }

    minutosActuales = minutosActuales.toString()
    if ( minutosActuales.length === 1 ) {
        minutosActuales = "0"+minutosActuales
    }

    segundosActuales = segundosActuales.toString()
    if ( segundosActuales.length === 1 ) {
        segundosActuales = "0"+segundosActuales
    }

    var ampm = " "
    if ( parseInt(horaActual) > 12 ) {
        ampm = "pm"
    } else {
        ampm = "am"
    }

    var parrafo = document.getElementById("parrafo")
    parrafo.textContent = horaActual + ":" + minutosActuales + ":" + segundosActuales + " " + ampm

}

setInterval(reloj, 1000)